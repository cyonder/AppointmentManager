import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import {
    fetchServices,
    deleteService,
    updateService,
    createBarberServices,
    deleteBarberServices
} from "../../actions/service";

// const ROOT_URL = 'http://barber.cloud/api/v1';
const ROOT_URL = 'https://barbercloud.herokuapp.com/api/v1';
// const ROOT_URL = 'http://localhost:3000/api/v1';
const API_KEY = '?key=94drtfsm144';

class ServiceAccordion extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: this.props.id,
            accordionIsOpen: false,
            barbersForServices: []
        };

        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
    };

    componentDidMount(){
        axios.get(`${ROOT_URL}/barber_services/${this.state.id}${API_KEY}`)
            .then(response => {
                this.setState({
                    barbersForServices: [...this.state.barbersForServices, ...response.data]
                });
            })
            .catch(error => {
                throw(error);
            })
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

    toggleSwitch = (event, barber_id) => {
        let isSwitchedOn = event.target.checked
        let service_id = this.state.id;

        if(isSwitchedOn){
            // console.log("checked: ", event.target.checked);
            this.props.createBarberServices(service_id, barber_id);
        }else{
            // console.log("unchecked: ", event.target.checked);
            this.props.deleteBarberServices(service_id, barber_id);
        }
    }

    renderBarberList(){
        let barbers = new Object(this.props.barbers);
        let barbersForServices = this.state.barbersForServices;

        return Object.keys(barbers).map((key, index) => {
            let isChecked = false;

            // TODO: After create_barber_services invoked, fetching doesn't work
            // Maybe need to fetch services list again.

            for(let i = 0; i < barbersForServices.length; i++){
                if(barbers[key].id === barbersForServices[i].barber_user_id){
                    isChecked = true;
                }
            }

            return(
                <div className="form-group" key={index}>
                    <label className="form-switch">
                        <input
                            type="checkbox"
                            defaultChecked={isChecked}
                            onChange={ (e) => this.toggleSwitch(e, barbers[key].id) }
                            />
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
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchServices,
        deleteService,
        updateService,
        createBarberServices,
        deleteBarberServices
    }, dispatch)
}

export default reduxForm({
    form: 'serviceForm',
    validate: validate
})(
    connect(mapStateToProps, mapDispatchToProps)(ServiceAccordion)
);
