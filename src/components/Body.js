import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col, Row, Spin, Alert} from 'antd';
import { setLoading, setData, setError } from '../reduxStore/actions';
import EditNote from "./EditNote"
import ListNotes from "./ListNotes"
import {defaultNotes, updateDatabase} from "../note"

function Body() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    useEffect(() => {
        console.log('Fetching data from local storage...');
        dispatch(setLoading(true));
        dispatch(setData(null));

        // fetch data
        try {
            const storedData = localStorage.getItem('notes');
            // get data from localstorage
            if (storedData) {
                dispatch(setData(JSON.parse(storedData)))
            }
            // If there are no notes in local storage, initialize with a default array Note[]
            else {
                updateDatabase(defaultNotes);
                dispatch(setData(defaultNotes));
            }
        } catch (error) {
            console.error('Error loading notes from local storage:', error);
            dispatch(setError(error));
        } finally {
            dispatch(setLoading(false));
        }
    }, [dispatch])

    // Render loading spinner while data is being fetched
    if (loading)
        return (
            <div style={{textAlign: "center"}}>
                <Spin size="large" />
            </div>
        );

    // Render error message if there is an error fetching data
    if (error)
        return <Alert type="error" showIcon message="Error" description={`Error: ${error}`}/>;

    // Render EditNote and ListNotes components within a responsive grid layout
    return (
        <>
            <Row gutter={[{xs: 2, sm: 8, md: 16}, {xs: 2, sm: 8, md: 16}]}>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} key={1}>
                    <ListNotes />
                </Col>
                <Col xs={12} sm={12} md={12} lg={18} xl={18} key={2}>
                    <EditNote />
                </Col>
            </Row>
        </>
    );
}


export default Body;