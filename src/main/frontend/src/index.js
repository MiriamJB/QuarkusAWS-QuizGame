import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestPage from "./TestPage";
import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/test" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
