import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <footer id="index-footer" className="animated bounce">
                <Link to="/">
                    <span>What is Barberate?</span>
                    <img src="/images/down-arrow.svg"/>
                </Link>
            </footer>
        );
    }
}

export default Footer;