import { theme, ConfigProvider} from 'antd'; // Import Spin component
import {  List,  } from "antd";
import React from 'react';
import { Typography  } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedNote } from '../reduxStore/actions';

function ListNotes() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)
    const selectedNote = useSelector((state) => state.selectedNote);

    const handleNoteClick = (index) => {
        dispatch(setSelectedNote(index))
    }

    return (
        // TODO move ConfigProvider higher
        // TODO add scrollbars https://ant.design/components/list
        <ConfigProvider
            theme={{
                algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
            }}
        >
            <List
                bordered
                header={<div>Заметки</div>}
                dataSource={data}
                renderItem={(item, index) =>
                {
                    const isSelected = index === selectedNote;
                    return (
                        <List.Item
                            key={index}
                            onClick={() => handleNoteClick(index)}
                            style={{ cursor: 'pointer', backgroundColor: isSelected ? '#f0f0f0' : 'white', }}>
                            <List.Item.Meta title = {
                                <Typography.Paragraph ellipsis={true}>
                                    {item.title}
                                </Typography.Paragraph>
                            } description={
                                <Typography.Paragraph ellipsis={true}>
                                    {item.description || 'Нет тела'}
                                </Typography.Paragraph>
                            }/>
                        </List.Item>
                    );
                }}
            />
        </ConfigProvider>
    );
}


export default ListNotes;