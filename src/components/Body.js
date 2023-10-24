import EditNote from "./EditNote"
import ListNotes from "./ListNotes"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col, Row, Spin, Alert} from 'antd';
import { setLoading, setData, setError } from '../reduxStore/actions';
import Note from "../note"

function Body() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        console.log("Fetching data from file...");
        dispatch(setLoading(true));
        dispatch(setData(null));

        // TODO fix the error: if there is no file, it returns the index.html....
        // Fetch data
        fetch('./data.txt')
            .then(response => response.text())
            .then(fileContent => {
                const rawArray = fileContent.split('\n')
                    .map(note => note.replace(/\\n/g, '\n'));
                const notesArray: Note = rawArray.map((note) => {
                    const [title, description] = note.split('\n');
                    return { title, description };
                });
                dispatch(setData(notesArray));
                dispatch(setLoading(false));
            })
            .catch((error) => {
                console.error('Error loading notes from file:', error);
                dispatch(setError(error));
                dispatch(setLoading(false));
            });
    }, [dispatch])

    if (loading)
        return (
            <div style={{textAlign: "center"}}>
                <Spin size="large" />
            </div>
        );
    if (error)
        return <Alert type="error" showIcon message="Error" description={`Error: ${error}`}/>;

    return (
        <>
            <Row gutter={[{xs: 2, sm: 8, md: 16}, {xs: 2, sm: 8, md: 16}]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} key={1}>
                    <ListNotes />
                </Col>
                <Col xs={12} sm={12} md={18} lg={18} xl={18} key={2}>
                    <EditNote />
                </Col>
            </Row>
        </>
    );
}


export default Body;