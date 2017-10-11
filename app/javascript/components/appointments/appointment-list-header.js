import React, { Component } from 'react';

class AppointmentListHeader extends Component{
    render(){
        return(
            <header>
                <div className="header-container">
                    <div className="input-group col-5">
                        <input type="text" className="form-input" placeholder="Search Appointments"/>
                        <select className="form-select">
                            <option>Filter by</option>
                            <option>Time</option>
                            <option>Customer</option>
                            <option>Service</option>
                            <option>Status</option>
                        </select>
                    </div>

                    <div className="">
                        <button className="btn btn-brand">Add Appointment</button>
                    </div>
                </div>
            </header>
        );
    };
}

export default AppointmentListHeader;