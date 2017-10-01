import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import applicationReducer from "../reducers/application";
import Routes from '../config/routes';

ReactDOM.render(
    <Provider store={createStore(applicationReducer)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('application')
);