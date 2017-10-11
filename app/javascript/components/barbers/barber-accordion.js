import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class BarberAccordion extends Component{
    constructor(){
        super();

        this.state = {
            accordionToggle: false
        };

        this.toggleAccordion = this.toggleAccordion.bind(this);
    };

    toggleAccordion(){
        this.setState({
            accordionToggle: !this.state.accordionToggle
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
                    <div className="column h80">
                        <Field
                            label="First Name"
                            name="first_name"
                            component={ this.renderTextField }
                        />
                    </div>
                    <div className="column h80">
                        <Field
                            label="Last Name"
                            name="last_name"
                            component={ this.renderTextField }
                        />
                    </div>
                </div>
                <div className="columns mb5">
                    <div className="column h80">
                        <Field
                            label="Phone Number"
                            name="phone"
                            component={ this.renderTextField }
                        />
                    </div>
                    <div className="column h80">
                        <Field
                            label="Email"
                            name="email"
                            component={ this.renderTextField }
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-brand mr10">Update</button>
                <button type="submit" className="btn btn-info mr10">Freeze</button>
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
                    { this.props.first_name + " " + this.props.last_name }
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

    if(!values.first_name){
        errors.first_name = "This field is required!";
    }

    if(!values.last_name){
        errors.last_name = "This field is required!";
    }

    if(!values.phone){
        errors.phone = "This field is required!";
    }

    if(!values.email){
        errors.email = "This field is required!";
    }

    return errors;
};

export default reduxForm({
    form: 'barberForm',
    validate: validate,
})(BarberAccordion);