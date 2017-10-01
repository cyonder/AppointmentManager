import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

function formatDate(date){
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = monthNames[newDate.getMonth()];

    return month + " " + day;
}

function formatTime(date){
    let newDate = new Date(date);
    let minute = newDate.getMinutes();
    let hour = newDate.getHours();

    return hour + ":" + minute;
}

class AppointmentList extends Component{
    //TODO: Appointment list is not ordered by date

    constructor(){
        super();
    }

    renderAppointmentList(appointments){
        return Object.keys(appointments).map((key, index) => {
            return(
                <div className="accordion" key={index}>
                    <div className="accordion-header">
                        <div className="h4">{ formatDate(key) }</div>
                        <div className="h6">{ appointments[key].length } Appointments</div>
                    </div>
                    <div className="accordion-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Time</td>
                                    <td>Customer</td>
                                    <td>Service</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderAppointments(appointments[key]) }
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        });
    }

    renderAppointments(appointments){
        return appointments.map((appointment, index) => {
            return(
                <tr key={ index }>
                    <td>{ appointment.id }</td>
                    <td>{ formatTime(appointment.date) }</td>
                    <td>{ appointment.customer }</td>
                    <td>{ appointment.service }</td>
                    <td>{ appointment.status }</td>
                </tr>
            );
        });
    }

    render(){
        let appointments = _.groupBy(this.props.appointments, 'date'); // Group appointments by date
        const appointmentList = this.renderAppointmentList(appointments);

        return(
            <section>
                { appointmentList }
            </section>
        );
    };
}

function mapStateToProps(state){
    return{
        appointments: state.appointments
    };
}

export default connect(mapStateToProps)(AppointmentList);
