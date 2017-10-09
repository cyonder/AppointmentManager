import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

// let imageSources = ['bg', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6'];
//
// function changeImage(){
//     document.getElementById('background-image').src = "/images/" + imageSources[Math.floor(Math.random() * 3)] + ".svg";
// }
//
// window.setInterval(function(){
//     changeImage();
// }, 3000);

class Index extends Component{

    render(){
        return(
             <div id="page" className="direction-column">
                 <Header />
                 <main id="sections">
                     <section id="section-1">
                         <div id="index">
                             <div id="index-page">
                                 <div id="index-title">
                                     {/*Book An Appointment Online<br />*/}
                                     {/*At A Barbershop Near You*/}

                                     {/*<p>*/}
                                         {/*Barberate makes getting haircut easy*/}
                                     {/*</p>*/}
                                 </div>
                                 <div id="index-content">

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

export default Index;