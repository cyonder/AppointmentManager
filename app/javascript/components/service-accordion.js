import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class ServiceAccordion extends Component{
    constructor(){
        super();

        this.state = {
            accordionToggle: true
        };

        this.toggleAccordion = this.toggleAccordion.bind(this);
    };

    toggleAccordion(){
        this.setState({
            accordionToggle: !this.state.accordionToggle
        });
    }

    renderBarberList(){
        return this.props.barbers.map((barber, index) => {
            return(
                <div className="form-group" key={index}>
                    <label className="form-switch">
                        <input type="checkbox" defaultChecked="defaultChecked"/>
                        <i className="form-icon"></i>
                        <span>{`${barber.first_name} ${barber.last_name}`}</span>
                    </label>
                </div>
            );
        });
    }
    
    renderTextField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

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

    onSubmit(values){
        console.log(values);
    }

    renderForm(){
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <div className="columns mb5">
                    <div className="column">
                        <Field
                            className="h80"
                            label="Service Name"
                            name="service_name"
                            component={ this.renderTextField }
                        />
                        <Field
                            className="h80"
                            label="Time"
                            name="time"
                            component={ this.renderTextField }
                        />
                        <Field
                            className="h80"
                            label="Price"
                            name="price"
                            component={ this.renderTextField }
                        />
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

                <button type="submit" className="btn btn-brand mr10">Update</button>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        );
    }

    render(){
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
    validate: validate,
})(
    connect(mapStateToProps)(ServiceAccordion)
);