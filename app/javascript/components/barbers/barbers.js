import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from "../../actions/ui";
import { bindActionCreators } from 'redux';

import Navigation from '../navigation';
import BarberList from './barber-list';
import BarberListHeader from './barber-list-header';
import BarberCreateModal from './barber-create-modal';

class Barbers extends Component{

    render(){
        return(
            <div id="page">
                <Navigation />
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ toggleModal: toggleModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Barbers);