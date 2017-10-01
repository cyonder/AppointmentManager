import React, { Component } from 'react';

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

class AppointmentAccordion extends Component{
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

    renderAppointments(){
        return this.props.appointments.map((appointment, index) => {
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
        const activeClass = this.state.accordionToggle ? "d-block" : "d-none";

        return(
          <div className="accordion">
              <div className="accordion-header" onClick={ () => this.toggleAccordion() }>
                  <div className="h4">{ formatDate(this.props.date) }</div>
                  <div className="h6">{ this.props.length } Appointments</div>
              </div>
              <div className={activeClass + " accordion-body"}>
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
                            { this.renderAppointments() }
                      </tbody>
                  </table>
              </div>
          </div>
        );
    }
}

export default AppointmentAccordion;