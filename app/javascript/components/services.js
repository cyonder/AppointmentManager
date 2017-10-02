import React, { Component } from 'react';
import Navigation from '../containers/navigation';
import ServicesList from '../containers/services-list';
import ServicesListHeader from '../containers/services-list-header';

class Services extends Component{
    render(){
        return(
            <div id="page">
                <Navigation />
                <main>
                    <ServicesListHeader />
                    <ServicesList />
                </main>
            </div>
        );
    };
}

export default Services;