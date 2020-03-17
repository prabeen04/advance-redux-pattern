import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppErrorBoundary } from './components/ErrorBoundaries';
import { sentry } from './config/Sentry/Sentry';
import { SENTRY_URL } from './config/config';

sentry.initialize(SENTRY_URL);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
