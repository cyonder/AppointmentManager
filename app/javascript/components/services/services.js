import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    toggleModal,
    toggleNavigation
} from "../../actions/ui";

import Navigation from '../navigation';
import ServicesList from './services-list';
import ServicesListHeader from './services-list-header';
import ServiceCreateModal from './service-modal';

class Services extends Component{
    render(){
        return(
            <div id="page">
                <Navigation { ...this.props } />
                <main>
                    <ServicesListHeader { ...this.props } />
                    <ServicesList />
                    <ServiceCreateModal { ...this.props } />
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

export default connect(mapStateToProps, { toggleNavigation, toggleModal })(Services);
