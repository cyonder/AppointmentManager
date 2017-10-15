import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    toggleModal,
    toggleNavigation
} from "../../actions/ui";

import Navigation from '../navigation';
import BarberList from './barber-list';
import BarberListHeader from './barber-list-header';
import BarberCreateModal from './barber-modal';

class Barbers extends Component{

    render(){
        return(
            <div id="page">
                <Navigation { ...this.props } />
                <main>
                    <BarberListHeader { ...this.props } />
                    <BarberList />
                    <BarberCreateModal { ...this.props } />
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

export default connect(mapStateToProps, { toggleNavigation, toggleModal })(Barbers);
