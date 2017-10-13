import React, { Component } from 'react';

class ServicesListHeader extends Component{
    render(){
        return(
            <header>
                <div className="header-container">
                    <div className="input-group col-5">
                        <input type="text" className="form-input" placeholder="Search Services"/>
                        <select className="form-select">
                            <option>Filter by</option>
                            <option>Time</option>
                            <option>Customer</option>
                            <option>Service</option>
                            <option>Status</option>
                        </select>
                    </div>

                    <div className="">
                        <button className="btn btn-brand" onClick={ () => this.props.toggleModal() }>Add Service</button>
                    </div>
                </div>
            </header>
        );
    };
}

export default ServicesListHeader;
