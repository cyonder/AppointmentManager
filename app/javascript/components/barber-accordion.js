import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <button type="submit" className="btn btn-brand mt10">Submit</button>
            </form>
        );
    }

    render(){
        const activeClass = this.state.accordionToggle ? "d-block" : "d-none";

        return(
            <div className="accordion">
                <div className="accordion-header" onClick={ () => this.toggleAccordion() }>
                    { this.props.first_name + " " + this.props.last_name }
                </div>
                <div className={activeClass + " accordion-body p20"}>
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
        errors.first_name = "Enter first name!";
    }

    if(!values.last_name){
        errors.last_name = "Enter last name!";
    }

    if(!values.phone){
        errors.phone = "Enter phone number!";
    }

    if(!values.email){
        errors.email = "Enter email!";
    }

    return errors;
};

// function mapStateToProps(state){
//     return{
//         barbers: state.barbers
//     }
// }

InitializeFromStateForm = reduxForm({
    form: 'editBarberForm',
    validate: validate,
    enableReinitialize : true
})(BarberAccordion);

InitializeFromStateForm = connect(
    state => ({
        initialValues: state.barbers
    })
)(InitializeFromStateForm);

// export default connect(mapStateToProps)(BarberAccordion);
/*
    export default reduxForm({
        form: 'barberForm',
        validate: validate,
        enableReinitialize : true
    })(BarberAccordion);
*/


    // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
    // InitializeFromStateForm = reduxForm({
    //     form: 'initializeFromState' // a unique identifier for this form
    // })(InitializeFromStateForm)
    //
    // // You have to connect() to any reducers that you wish to connect to yourself
    // InitializeFromStateForm = connect(
    //     state => ({
    //         initialValues: state.account.data // pull initial values from account reducer
    //     }),
    //     { load: loadAccount } // bind account loading action creator
    // )(InitializeFromStateForm)
    //
    //
    // export default InitializeFromStateForm
