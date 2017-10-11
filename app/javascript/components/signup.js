import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

class Signup extends Component{
    constructor(){
        super();
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

    renderPasswordField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return(
            <div className={ className }>
                <label className="form-label">{ field.label }</label>
                <input
                    type="password"
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

    render(){
        const { handleSubmit } = this.props;

        return(
            <div id="page" className="direction-column">
                <Header />
                <main id="sections">
                    <section id="section-1">
                        <div id="index">
                            <div id="index-page">
                                <div id="form-container">
                                    <div className="h4">Sign Up to Barberate</div>
                                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                                        <Field
                                            label="First Name"
                                            name="first_name"
                                            component={ this.renderTextField }
                                        />
                                        <Field
                                            label="Last Name"
                                            name="last_name"
                                            component={ this.renderTextField }
                                        />
                                        <Field
                                            label="Email"
                                            name="email"
                                            component={ this.renderTextField }
                                        />
                                        <Field
                                            label="Email Confirmation"
                                            name="email_confirmation"
                                            component={ this.renderTextField }
                                        />
                                        <Field
                                            label="Password"
                                            name="password"
                                            component={ this.renderPasswordField }
                                        />
                                        <button type="submit" className="btn btn-brand">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                            <div id="index-aside">
                                {/*<div id="index-aside-content">*/}
                                {/*<span>Make an appointment now</span>*/}
                                {/*</div>*/}
                                <img id="background-image" src="/images/bg.svg" alt=""/>
                                {/*<div className="appointment-button">*/}
                                {/*<Link to="/signup" className="btn btn-lg btn-brand">Make an Appointment</Link>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <Footer />
                    </section>
                    <section id="section-2">Some section</section>
                    <section id="section-3">Some section</section>
                    <section id="section-4">Some section</section>
                </main>
            </div>
        );
    }

}

export default reduxForm({
    form: 'signupForm',
})(Signup);