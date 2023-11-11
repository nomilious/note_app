import React from 'react';
import { List, Typography, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {createNote, deleteNote, setSelectedNote} from '../reduxStore/actions';
import { formatDateTime, isSameDay } from "../note";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";

function ListNotes() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const selectedNote = useSelector((state) => state.selectedNote);
    const isNewNoteEmpty = data[0].description.replace(/<[^>]*>/g, '') === "";
    const cantDelete = data.length <=1;

    const handleNoteClick = (index) => {
        dispatch(setSelectedNote(index));
    };

    // TODO WHY NEW NOTE IS LOADED INTO LOCALSTORAGE ?????
    const createNewNote = () => {
        dispatch(createNote())
        handleNoteClick(0);
    }
    const handleDeleteNote = () => {
        dispatch(deleteNote(selectedNote));
    };

    return (
        <div className="scrollable-container" style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
            <List
                bordered
                header={
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>Заметки</div>
                        <div>
                            <Button
                                type="text"
                                style={{ marginRight: "auto" }}
                                icon={<PlusOutlined />}
                                onClick={createNewNote}
                                disabled={isNewNoteEmpty}
                            />
                            <Button
                                type="text"
                                icon={<DeleteOutlined />}
                                onClick={handleDeleteNote}
                                disabled={cantDelete}
                            />
                        </div>
                    </div>
                }
                dataSource={data}
                renderItem={(item, index) => {
                    const isSelected = index === selectedNote;
                    // replace all html tags with "\n" and trim
                    const rawData = item.description.replace(/<[^>]*>/g, '\n').trim()
                    const firstRow = (rawData) ? rawData.split("\n")[0] : "Новая заметка";
                    // slice from firstRaw.length() and trim, then slice to first "\n"
                    const secondRow = (rawData) ? (rawData.slice(firstRow.length).trim().split("\n")[0] || 'Нет тела') : 'Нет тела';
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
                                        {firstRow}
                                    </Typography.Paragraph>}
                                description={
                                    <Typography.Paragraph ellipsis>
                                        {/*if it's the same day as today, show only time, else show date*/}
                                        <Typography.Text>
                                            {
                                                isSameDay(item.dateTime)
                                                    ? formatDateTime(item.dateTime).split(" ")[1]
                                                    :formatDateTime(item.dateTime).split(" ")[0]
                                            }
                                        </Typography.Text >
                                        <Typography.Text style={{color:"grey"}}> {secondRow}
                                        </Typography.Text>
                                    </Typography.Paragraph>
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