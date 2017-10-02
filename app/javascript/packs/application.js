import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import applicationReducer from "../reducers/application";
import Routes from '../config/routes';

ReactDOM.render(
    <Provider store={createStore(applicationReducer)}>
        <Router>
            <Routes />
        </Router>
    </Provider>
    ,document.getElementById('application')
);