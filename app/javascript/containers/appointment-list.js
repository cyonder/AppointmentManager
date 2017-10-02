import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppointmentAccordion from '../components/appointment-accordion';
import moment from "moment";

class AppointmentList extends Component{
    //TODO: Appointment list is not ordered by date

    constructor(){
        super();
    }

    renderList(appointments){
        return Object.keys(appointments).map((key, index) => {
            return(
                <AppointmentAccordion
                    key={ index }
                    date={ key }
                    length={ appointments[key].length }
                    appointments={ appointments[key] }
                />
            );
        });
    }


    render(){
        let newDateArray = this.props.appointments.reduce((accu, item) => {
            // Format date properly
            item.date = moment(item.date).format('ddd MMM D');

            // Create new grouped object
            accu[item.date] = accu[item.date] || [];
            accu[item.date].push(item);

            return accu;
        }, {});

        return(
            <section>
                { this.renderList(newDateArray) }
            </section>
        );
    }
}

function mapStateToProps(state){
    return{
        appointments: state.appointments
    }
}

export default connect(mapStateToProps)(AppointmentList);
