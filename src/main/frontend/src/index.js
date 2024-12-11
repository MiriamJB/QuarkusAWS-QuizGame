import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import LandingPage from "./Components/LandingPage";
import TestPage from "./Components/TestPage";
import AuthLayout from "./Components/AuthLayout";
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
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/home" element={<AuthLayout><App/></AuthLayout>}/>
                <Route path="/test" element={<AuthLayout><TestPage/></AuthLayout>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
