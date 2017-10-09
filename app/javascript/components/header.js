import React, { Component } from 'react';
import { Link } from 'react-router-dom';

window.addEventListener("scroll", function(){
    let header = document.getElementById("navigation");

    if(window.scrollY > 50){
        header.style.backgroundColor = "rgb(255, 255, 255)";
    }else{
        header.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
});

class Header extends Component{
    render(){
        return(
            <header id="navigation">
                <div id="logo"></div>
                <div id="navigation-links">
                    <Link to="/">What is Barberate?</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">Pricing</Link>
                </div>
                <div id="navigation-buttons">
                    <Link to="/login" className="btn btn-link login-button">Log In</Link>
                    <Link to="/signup" className="btn btn-brand signup-button">Sign Up</Link>
                </div>
            </header>
        );
    }
}

export default Header;