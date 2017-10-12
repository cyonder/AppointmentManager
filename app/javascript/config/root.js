import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Index from '../components/index';
import Login from '../components/login';
import Signup from '../components/signup';
import Appointments from '../components/appointments/appointments';
import Barbers from '../components/barbers/barbers';
import Services from '../components/services/services';

const Root = ({ store }) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/appointments" component={Appointments}/>
                    <Route path="/barbers" component={Barbers}/>
                    <Route path="/services" component={Services}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;