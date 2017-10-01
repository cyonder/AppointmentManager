import React, { Component } from 'react';
// import { connect } from 'react-redux';

class BarberListHeader extends Component{
    render(){
        return(
            <header>
                <div className="header-container">
                    <div className="input-group col-5">
                        <input type="text" className="form-input" placeholder="Search Barbers"/>
                        <select className="form-select">
                            <option>Filter by</option>
                            <option>Time</option>
                            <option>Customer</option>
                            <option>Service</option>
                            <option>Status</option>
                        </select>
                    </div>

                    <div className="">
                        <button className="btn btn-brand">Add Barber</button>
                    </div>
                </div>
                {/*<div className="header-headline"></div>*/}
            </header>
        );
    };
}

export default BarberListHeader;