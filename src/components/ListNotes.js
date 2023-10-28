import React from 'react';
import { List, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {setSelectedNote} from '../reduxStore/actions';
import {formatDateTime, isSameDay} from "../note";

function ListNotes() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const selectedNote = useSelector((state) => state.selectedNote);

    const handleNoteClick = (index) => {
        dispatch(setSelectedNote(index));
    };

    // Renders the list of notes with conditional background color based on selection.
    // Handles ellipsis for long note titles and descriptions using Ant Design Typography component.
    return (
        <div className="scrollable-container" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
            <List
                bordered
                header={<div>Заметки</div>}
                dataSource={data}
                renderItem={(item, index) => {
                    const isSelected = index === selectedNote;
                    return (
                        <List.Item
                            key={index}
                            onClick={() => handleNoteClick(index)}
                            style={{cursor: 'pointer', backgroundColor: isSelected ? '#f0f0f0' : 'white',}}
                        >
                            {/*Displays title/description of "NO title/Description"*/}
                            <List.Item.Meta
                                title={
                                    <Typography.Paragraph ellipsis>
                                        {item.title || "Нет заголовка"}
                                    </Typography.Paragraph>}
                                description={
                                    <Typography.Paragraph ellipsis>
                                        {/*if it's the same day as today, show only time*/}
                                        <Typography.Text italic={true}>
                                            {
                                                isSameDay(item.dateTime)
                                                ? formatDateTime(item.dateTime).split(" ")[1]
                                                :formatDateTime(item.dateTime)
                                            }
                                        </Typography.Text> {item.description || 'Нет тела'}</Typography.Paragraph>
                                }
                            />
                        </List.Item>
                    );
                }}
            />
        </div>
    );
}

export default ListNotes;