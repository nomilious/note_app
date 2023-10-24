import { theme, ConfigProvider} from 'antd'; // Import Spin component
import {  List,  } from "antd";
import React, { useEffect } from 'react';
import { Typography  } from "antd";
import { useDispatch, useSelector } from 'react-redux';

function ListNotes() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)

    return (
        // TODO move ConfigProvider higher
        <ConfigProvider
            theme={{
                algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
            }}
        >
            {/* TODO onclick change selected Note*/}
            <List
                bordered
                header={<div>Заметки</div>}
                dataSource={data}
                renderItem={(item) =>
                {
                    const lines = item.split('\n');
                    const title = lines[0];
                    const description = lines.slice(1).join('\n');
                    return (
                        <List.Item>
                            <List.Item.Meta title = {
                                <Typography.Paragraph ellipsis={true}>
                                    {title}
                                </Typography.Paragraph>
                            } description={
                                <Typography.Paragraph ellipsis={true}>
                                    {description || 'Нет тела'}
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