
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SamuraiJSApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <SamuraiJSApp />
)