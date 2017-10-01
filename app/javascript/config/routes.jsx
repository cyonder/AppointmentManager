import React from 'react';
import { Route } from 'react-router-dom'

import Appointments from '../components/appointments';
import Barbers from '../components/barbers';

const Routes = (props)=> {
    return(
        <div>
            <Route path="/appointments" component={Appointments}/>
            <Route path="/barbers" component={Barbers}/>
        </div>
    );
};

export default Routes;