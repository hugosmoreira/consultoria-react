import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/01.png'

function About(props) {
    return (
        <section className="about-section about-illustration-img section-gap">
            <div className="container">
                <div className="illustration-img">
                    <img src={illustration} alt="" />
                </div>
                <div className="row no-gutters justify-content-lg-end justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">Web Studio Labs Your <br /> Software Boutique </h2>
                            </div>
                            <p className="mb-25">
                            Not only have a functional web application in production but also significantly improve your software quality and productivity
                                </p>
                            <p>
                            As software developers we strive to deliver not only well written code, but code that delivers real value to each client
                                </p>
                            <ul className="about-list">
                                <li> <i className="far fa-check" /> Software Development &amp; Consulting Agency</li>
                                <li> <i className="far fa-check" /> Web &amp; Mobile Development </li>
                            </ul>
                            <Link to="/about" className="main-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;