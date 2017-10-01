import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleNav } from "../actions/ui";
import { bindActionCreators } from 'redux';

class Navigation extends Component{
    render(){
        return(
            <nav className={ this.props.ui.navToggle ? "nav-open" : ""}>
                <div id="nav-header" onClick={ () => this.props.toggleNav() }>
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
                    <a className="nav-item">
                        <img src="/images/dashboard.svg" alt=""/>
                        <span className="nav-text">Dashboard</span>
                    </a>

                    <a className="nav-item">
                        <img src="/images/appointments.svg" alt=""/>
                        <span className="nav-text">Appointments</span>
                    </a>

                    <a className="nav-item">
                        <img src="/images/barbers.svg" alt=""/>
                        <span className="nav-text">Barbers</span>
                    </a>

                    <a className="nav-item">
                        <img src="/images/services.svg" alt=""/>
                        <span className="nav-text">Services</span>
                    </a>

                    <a className="nav-item">
                        <img src="/images/reviews.svg" alt=""/>
                        <span className="nav-text">Reviews</span>
                    </a>

                    <a className="nav-item">
                        <img src="/images/reports.svg" alt=""/>
                        <span className="nav-text">Reports</span>
                    </a>
                </div>
                <div id="nav-footer">
                    <a className="nav-item">
                        <img src="/images/settings.svg" alt=""/>
                        <span className="nav-text">Settings</span>
                    </a>
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