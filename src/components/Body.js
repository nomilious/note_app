import EditNote from "./EditNote"
import ListNotes from "./ListNotes"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col, Row, Spin} from 'antd';
import { setGameDetails, setLoading, setData } from '../reduxStore/actions';

function Body() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        console.log("Fetching data from file...");
        dispatch(setLoading(true));
        dispatch(setData(null));

        // Fetch data
        fetch('./data.txt')
            .then((response) => response.text())
            .then((fileContent) => {
                const notesArray = fileContent.split('\n')
                    .map(note => note.replace(/\\n/g, '\n'));
                dispatch(setData(notesArray));
                dispatch(setLoading(false));
            })
            .catch((error) => {
                // TODO replace with ui alert
                console.error('Error loading notes from file:', error);
                dispatch(setLoading(false));
            });
    }, [dispatch])

    if (loading)
        return (
            <div style={{textAlign: "center"}}>
                <Spin size="large" />
            </div>
        );

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