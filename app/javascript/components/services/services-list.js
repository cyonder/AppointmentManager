import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceAccordion from "./service-accordion";
import { fetchServices } from '../../actions/service';

class ServiceList extends Component{

    componentDidMount(){
        this.props.fetchServices();
    }

    renderList(){
        console.log("in renderList - services list");
        let services = new Object(this.props.services);
        console.log("services ", services);
        console.log("GOING into accordion");
        return Object.keys(services).map((key, index) => {
            return(
                <ServiceAccordion
                    form={'form-' + index}
                    key={ index }
                    id={ services[key].id }
                    service_name={ services[key].service_name }
                    initialValues={ services[key] }
                />
            );
        })
    };

    render(){
        return(
            <section id="app">
                { this.renderList() }
            </section>
        );
    };
}

function mapStateToProps(state){
    return{
        services: state.services
    };
}

export default connect(mapStateToProps, { fetchServices })(ServiceList);
