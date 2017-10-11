import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';

// import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import Async from '../middlewares/async';

import rootReducer from "../reducers/root";
import Root from '../config/root';

let store = createStore(rootReducer, compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <Root store={store} />
    ,document.getElementById('root')
);