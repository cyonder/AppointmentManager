import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarberAccordion from '../components/barber-accordion';

class BarberList extends Component{
    renderList(){
        return this.props.barbers.map((barber, index) => {
            return(
                <BarberAccordion
                    form={'form-' + index}
                    key={ index }
                    index={ index }
                    first_name={ barber.first_name }
                    last_name={ barber.last_name }
                    phone={ barber.phone }
                    email={ barber.email }
                    initialValues={ barber }
                />
            );
        })
    };

    render(){
        return(
            <section>
                {this.renderList()}
            </section>
        );
    };
}

function mapStateToProps(state){
    return{
        barbers: state.barbers
    };
}

export default connect(mapStateToProps)(BarberList);