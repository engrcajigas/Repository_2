import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main';
import store from './store/store';

/**
 * Loads the application
 */
ReactDOM.render(
    <Provider store={store}>
            <Main />
    </Provider>,
    document.getElementById("root")
);
