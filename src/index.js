import React from 'react';
import ReactDOM from 'react-dom';
import { Router as BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppErrorBoundary } from './components/ErrorBoundaries';
import { sentry } from './config/Sentry/Sentry';
import { SENTRY_URL } from './config/config';

sentry.initialize(SENTRY_URL)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppErrorBoundary>
                <App />
            </AppErrorBoundary>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
