import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarberAccordion from './barber-accordion';
import { fetchBarbers } from "../../actions/barber";

class BarberList extends Component{

    componentDidMount(){
        this.props.fetchBarbers();
    }

    renderList(){
        console.log("in renderList - barbers list");
        let barbers = new Object(this.props.barbers);
        console.log("barbers ", barbers);
        console.log("GOING into accordion");
        return Object.keys(barbers).map((key, index) => {
            return(
                <BarberAccordion
                    form={'form-' + index}
                    key={ index }
                    index={ index }
                    id={ barbers[key].id }
                    first_name={ barbers[key].first_name }
                    last_name={ barbers[key].last_name }
                    phone={ barbers[key].phone }
                    email={ barbers[key].email }
                    initialValues={ barbers[key] }
                />
            );
        });
    };

    render(){
        return(
            <section id="app">
                { this.renderList() }
            </section>
        );
    };
}

function mapStateToProps(state){
    return{
        barbers: state.barbers
    };
}

export default connect(mapStateToProps, { fetchBarbers })(BarberList);
