import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Index from '../containers/index';
import Login from '../containers/login';
import Signup from '../containers/signup';
import Appointments from '../components/appointments';
import Barbers from '../components/barbers';
import Services from '../components/services';

const Root = ({ store }) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/appointments" component={Appointments}/>
                    <Route path="/barbers" component={Barbers}/>
                    <Route path="/services" component={Services}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;