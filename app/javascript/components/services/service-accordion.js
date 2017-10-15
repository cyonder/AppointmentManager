import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import {
    fetchServices,
    deleteService,
    updateService,
    getBarbersForServices
} from "../../actions/service";

// const ROOT_URL = 'http://barber.cloud/api/v1';
// const ROOT_URL = 'https://barbercloud.herokuapp.com/api/v1';
const ROOT_URL = 'http://localhost:3000/api/v1';
const API_KEY = '?key=94drtfsm144';

class ServiceAccordion extends Component{
    constructor(){
        super();

        this.state = {
            accordionIsOpen: false,
            barbersForServices: []
        };

        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    };

    componentDidMount(){
        let id = this.props.id;
        console.log("ID: ", id);

        // let getBarbersForServices =

        axios.get(`${ROOT_URL}/services/barbers/${id}${API_KEY}`)
            .then( response => {
                console.log("response.data: ", response.data);
                // this.setState({
                //     barbersForServices: response.data
                // });
            })
            .catch(error => {
                throw(error);
            })

        // let response = this.props.getBarbersForServices(this.props.id);
        // console.log("response: ", response.data);
    }

    toggleAccordion(){
        this.setState({ accordionIsOpen: !this.state.accordionIsOpen });
    }

    renderTextField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group h80 ${touched && error ? 'has-error' : ''}`;

        return(
            <div className={ className }>
                <label className="form-label">{ field.label }</label>
                    <input
                        type="text"
                        className="form-input"
                        { ...field.input }
                    />
                <div className="form-input-hint">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }

    onDelete(id){
        this.props.deleteService(id, () => {
            this.props.fetchServices();
        });
    }

    onSubmit(values){
        this.props.updateService(values, () => {
            this.props.fetchServices();
        });
    }

    renderBarberList(){
        let barbers = new Object(this.props.barbers);
        // console.log("Barbers: ", barbers);

        return Object.keys(barbers).map((key, index) => {
            return(
                <div className="form-group" key={index}>
                    <label className="form-switch">
                        <input type="checkbox" defaultChecked="defaultChecked"/>
                        <i className="form-icon"></i>
                        <span>{`${barbers[key].first_name} ${barbers[key].last_name}`}</span>
                    </label>
                </div>
            );
        });
    };

    renderForm(){
        const { handleSubmit } = this.props;

        return(
            <div className="columns">
                <div className="column">
                    <form onSubmit={ handleSubmit(this.onSubmit) }>
                        <Field
                            label="Service Name"
                            name="service_name"
                            component={ this.renderTextField }
                        />
                        <Field
                            label="Time"
                            name="time"
                            component={ this.renderTextField }
                        />
                        <Field
                            label="Price"
                            name="price"
                            component={ this.renderTextField }
                        />
                        <button type="submit" className="btn btn-brand mr10">Update</button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ () => this.onDelete(this.props.id) }
                            >Delete</button>
                    </form>
                </div>
                <div className="column">
                    <div className="h6 line-behind-text">
                        <span>Assign Barbers to Service</span>
                    </div>
                    <div className="">
                        { this.renderBarberList() }
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const headerClass = this.state.accordionIsOpen ? "opened" : "closed";
        const activeClass = this.state.accordionIsOpen ? "d-block" : "d-none";

        return(
            <div className="accordion">
                <div className={`h6 accordion-header ${headerClass}`} onClick={ () => this.toggleAccordion() }>
                    { this.props.service_name }
                </div>
                <div className={`p20 accordion-body ${activeClass}`}>
                    { this.renderForm() }
                </div>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if(!values.service_name){
        errors.service_name = "This field is required!";
    }

    if(!values.price){
        errors.price = "This field is required!";
    }

    if(!values.time){
        errors.time = "This field is required!";
    }

    return errors;
};

function mapStateToProps(state){
    return{
        barbers: state.barbers,
        // barbers_services: state.barbers_services
    };
}

export default reduxForm({
    form: 'serviceForm',
    validate: validate
})(
    connect(mapStateToProps, {
        fetchServices,
        deleteService,
        updateService,
        getBarbersForServices
    })(ServiceAccordion)
);
