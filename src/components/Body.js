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
            } else {
                // If there are no notes in local storage, initialize with a default array
                updateDatabase(defaultNotes)
                dispatch(setData(defaultNotes));
            }
        } catch (error) {
            console.error('Error loading notes from local storage:', error);
            dispatch(setError(error));
        } finally {
            dispatch(setLoading(false));
        }
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