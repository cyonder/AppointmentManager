import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { fetchBarbers } from "../../actions/barber";
import {
    deleteService,
    fetchServices,
    updateService
} from "../../actions/service";

class ServiceAccordion extends Component{
    constructor(){
        super();
        this.state = { accordionToggle: false };
        this.toggleAccordion = this.toggleAccordion.bind(this);
        // this.renderBarberList = this.renderBarberList.bind(this);
    };

    toggleAccordion(){
        this.setState({ accordionToggle: !this.state.accordionToggle });
    }

    renderBarberList(){
        // console.log("in renderBarberList - accordion - 3");
        let barbers = new Object(this.props.barbers);
        // console.log("barbers: ", barbers);
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

    renderForm(){
        console.log("in renderForm - accordion - 2");
        const { handleSubmit } = this.props;

        return(
            <div className="columns">
                <div className="column">
                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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
        console.log("in render - accordion - 1 (in the accordion)");
        const activeClass = this.state.accordionToggle ? "d-block" : "d-none";
        const headerClass = this.state.accordionToggle ? "opened" : "closed";

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

const validate = values =>{
// function validate(values){
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
        barbers: state.barbers
    };
}

export default reduxForm({
    form: 'serviceForm',
    validate: validate
})(
    connect(mapStateToProps, {
        fetchBarbers,
        deleteService,
        fetchServices,
        updateService
    })(ServiceAccordion)
);
// })(ServiceAccordion);

// ServiceAccordion.propTypes = {
//     barbers: PropTypes.object.isRequired
// };
