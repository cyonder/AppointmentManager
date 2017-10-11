import React, { Component } from 'react';
import Navigation from '../navigation';
import ServicesList from './services-list';
import ServicesListHeader from './services-list-header';

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