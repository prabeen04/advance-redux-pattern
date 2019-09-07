import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppErrorBoundary } from './components/ErrorBoundaries';
import { sentry } from './config/Sentry/Sentry';
import { SENTRY_URL } from './config/config';
import { HookedBrowserRouter } from './Hooks/useRouter';

sentry.initialize(SENTRY_URL)
ReactDOM.render(
    <Provider store={store}>
        <HookedBrowserRouter>
            <AppErrorBoundary>
                <App />
            </AppErrorBoundary>
        </HookedBrowserRouter>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
