import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { AuthProvider } from './AuthContext';

// Amplify configuration
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </React.StrictMode>
);
