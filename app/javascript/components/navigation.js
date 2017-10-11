import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleNav } from "../actions/ui";
import { bindActionCreators } from 'redux';

class Navigation extends Component{
    render(){
        return(
            <nav className={ this.props.ui.navToggle ? "nav-open" : ""}>
                <div id="nav-header" onClick={ () => this.props.toggleNav(!this.props.ui.navToggle) }>
                    <div
                        id="shop-name"
                        className={ !this.props.ui.navToggle ? "hide" : ""}>
                        Lahori's Hair Salon
                    </div>
                    <div
                        id="toggle-nav"
                        className={this.props.ui.navToggle ? "rotate-icon" : ""}>
                        <img src="/images/toggle.svg" alt=""/>
                    </div>
                </div>
                <div id="nav-body">
                    <Link to="" className="nav-item">
                        <img src="/images/dashboard.svg" alt=""/>
                        <span className="nav-text">Dashboard</span>
                    </Link>

                    <Link to="/appointments" className="nav-item">
                        <img src="/images/appointments.svg" alt=""/>
                        <span className="nav-text">Appointments</span>
                    </Link>

                    <Link to="/barbers" className="nav-item">
                        <img src="/images/barbers.svg" alt=""/>
                        <span className="nav-text">Barbers</span>
                    </Link>

                    <Link to="/services" className="nav-item">
                        <img src="/images/services.svg" alt=""/>
                        <span className="nav-text">Services</span>
                    </Link>

                    <Link to="" className="nav-item">
                        <img src="/images/reviews.svg" alt=""/>
                        <span className="nav-text">Reviews</span>
                    </Link>

                    <Link to="" className="nav-item">
                        <img src="/images/reports.svg" alt=""/>
                        <span className="nav-text">Reports</span>
                    </Link>
                </div>
                <div id="nav-footer">
                    <Link to="" className="nav-item">
                        <img src="/images/settings.svg" alt=""/>
                        <span className="nav-text">Settings</span>
                    </Link>
                </div>
            </nav>
        );
    };
}

function mapStateToProps(state){
    return{
        ui: state.ui
    }
}

// Anything returned from this function will end up as props
// on the navigation container
function mapDispatchToProps(dispatch){
    // Whenever toggleNav is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ toggleNav: toggleNav }, dispatch);
}

// Promote sidebar from a component to a container - it needs to know
// about this new dispatch method, toggleSidebar. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
