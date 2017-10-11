import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceAccordion from "./service-accordion";

class BarberList extends Component{
    renderList(){
        return this.props.services.map((service, index) => {
            return(
                <ServiceAccordion
                    form={'form-' + index}
                    key={ index }
                    service_name={ service.service_name }
                    initialValues={ service }
                />
            );
        })
    };

    render(){
        return(
            <section id="app">
                {this.renderList()}
            </section>
        );
    };
}

function mapStateToProps(state){
    return{
        services: state.services
    };
}

export default connect(mapStateToProps)(BarberList);