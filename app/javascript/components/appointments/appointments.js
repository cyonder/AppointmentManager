import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    toggleModal,
    toggleNavigation
} from "../../actions/ui";

import Navigation from '../navigation';
import AppointmentList from './appointment-list';
import AppointmentListHeader from './appointment-list-header';

class Appointments extends Component{
    render(){
        return(
            <div id="page">
                <Navigation { ...this.props } />
                <main>
                    <AppointmentListHeader />
                    <AppointmentList />
                </main>
            </div>
        );
    };
}

function mapStateToProps(state){
    return{
        ui: state.ui
    }
}

export default connect(mapStateToProps, { toggleNavigation, toggleModal })(Appointments);
