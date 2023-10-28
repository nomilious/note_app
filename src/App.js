import React from 'react';
import { Space } from 'antd';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import './App.css';
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;