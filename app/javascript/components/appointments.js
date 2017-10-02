import React, { Component } from 'react';
import Navigation from '../containers/navigation';
import AppointmentList from '../containers/appointment-list';
import AppointmentListHeader from '../containers/appointment-list-header';

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