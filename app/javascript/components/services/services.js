import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from "../../actions/ui";
import { bindActionCreators } from 'redux';

import Navigation from '../navigation';
import ServicesList from './services-list';
import ServicesListHeader from './services-list-header';
import ServiceCreateModal from './service-create-modal';

class Services extends Component{
    render(){
        return(
            <div id="page">
                <Navigation />
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ toggleModal: toggleModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);
