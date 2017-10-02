import React from 'react';
import { Route } from 'react-router-dom'

import Appointments from '../components/appointments';
import Barbers from '../components/barbers';
import Services from '../components/services';

const Routes = (props)=> {
    return(
        <div>
            <Route path="/appointments" component={Appointments}/>
            <Route path="/barbers" component={Barbers}/>
            <Route path="/services" component={Services}/>
        </div>
    );
};

export default Routes;