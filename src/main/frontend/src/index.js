import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import LandingPage from "./Components/LandingPage";
import AuthLayout from "./Components/AuthLayout";
import QuizView from "./Components/QuizView";
import QuizCreate from "./Components/QuizCreate";
import QuizBrowse from "./Components/QuizBrowse";
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
                <Route path="/yours" element={<AuthLayout><QuizView/></AuthLayout>}/>
                <Route path="/create" element={<AuthLayout><QuizCreate/></AuthLayout>}/>
                <Route path="/browse" element={<AuthLayout><QuizBrowse/></AuthLayout>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
