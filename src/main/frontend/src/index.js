import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import TestPage from "./Components/TestPage";
import AuthPage from "./Components/AuthPage";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Amplify configuration
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/test" element={<TestPage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
