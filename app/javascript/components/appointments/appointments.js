import React, { Component } from 'react';
import Navigation from '../navigation';
import AppointmentList from './appointment-list';
import AppointmentListHeader from './appointment-list-header';

class Appointments extends Component{
    render(){
        return(
            <div id="page">
                <Navigation />
                <main>
                    <AppointmentListHeader />
                    <AppointmentList />
                </main>
            </div>
        );
    };
}

export default Appointments;