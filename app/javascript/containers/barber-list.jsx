import React, { Component } from 'react';
import { connect } from 'react-redux';

class BarberList extends Component{
    renderList(){
        return this.props.barbers.map((barber) => {
            return(
                <div className="frame" key={barber.id}>
                    <h5>{barber.name}</h5>

                    <div className="frame-body">

                    </div>
                    <div className="frame-footer">
                        <button className="btn btn-brand">Edit</button>
                    </div>
                </div>
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
