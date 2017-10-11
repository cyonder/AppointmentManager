import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBarber } from "../../actions/barber";

class BarberAddModal extends Component{
    renderTextField(field){
        return(
            <div className="form-group">
                <label className="form-label">{ field.label }</label>
                <input
                    type="text"
                    className="form-input"
                    { ...field.input }
                />
            </div>
        );
    }

    onSubmit(values){
        this.props.createBarber(values);
        // this.props.createBarber(values, () => {
            // this.props.toggleModal();
            // dispatch({
                // type: "TOGGLE_MODAL"
            // })
            // this.props.history.push('/barbers');
        // });
    }

    renderForm(){
        const { handleSubmit } = this.props;
        return(
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
                    label="Phone"
                    name="phone"
                    component={ this.renderTextField }
                />
                <button className="btn btn-brand">Add</button>
            </form>
        );
    }

    render(){
        const activeClass = this.props.ui.modalToggle ? "active" : "";

        return(
            <div className={`modal ${activeClass} modal-sm`}>
                <div className="modal-overlay"></div>
                <div className="modal-container">
                    <div className="modal-header">
                        <div className="modal-title h5">Add Barber</div>
                        <button onClick={ () => this.props.toggleModal() } className="btn btn-clear float-right"/>
                    </div>
                    <div className="modal-body">
                        { this.renderForm() }
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'addBarberForm'
})(
    connect(null, { createBarber })(BarberAddModal)
);