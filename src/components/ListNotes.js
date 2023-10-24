import React from 'react';
import { ConfigProvider, List, Typography, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedNote } from '../reduxStore/actions';
import './ListNotes.css'; // Import the CSS file for styling

// TODO ensure that in the data.txt there is no empty lines
function ListNotes() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const selectedNote = useSelector((state) => state.selectedNote);

    const handleNoteClick = (index) => {
        dispatch(setSelectedNote(index));
    };

    return (
        <ConfigProvider theme={{ algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm], }}>
            <div className="list-container">
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
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: isSelected ? '#f0f0f0' : 'white',
                                }}
                            >
                                <List.Item.Meta
                                    title={<Typography.Paragraph ellipsis>{item.title}</Typography.Paragraph>}
                                    description={
                                        <Typography.Paragraph ellipsis>
                                            {item.description || 'Нет тела'}
                                        </Typography.Paragraph>
                                    }
                                />
                            </List.Item>
                        );
                    }}
                />
            </div>
        </ConfigProvider>
    );
}

export default ListNotes;