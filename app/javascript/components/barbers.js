import React, { Component } from 'react';

import Navigation from '../containers/navigation';
import BarberList from '../containers/barber-list';
import BarberListHeader from '../containers/barber-list-header';

class Barbers extends Component{
    render(){
        return(
            <div id="page">
                <Navigation />
                <main>
                    <BarberListHeader />
                    <BarberList />
                </main>
            </div>
        );
    };
}

export default Barbers;