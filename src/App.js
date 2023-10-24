import React from 'react';
import { Space } from 'antd';
import Nabbar from  "./components/Navbar";
import Body from "./components/Body";
import './App.css';

function App() {
    return (
        <Space direction="vertical" size={20} style={{ width: '100%' }}>
            <Nabbar />
            <Body />
        </Space>
    );
}

export default App;