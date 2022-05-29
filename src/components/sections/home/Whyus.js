import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/004.jpg'
import line1 from '../../../assets/img/lines/03.png'
import line2 from '../../../assets/img/lines/04.png'

function Whyus(props) {
    return (
        <section className="wcu-section box-style">
            <div className="container">
                <div className="wcu-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="wcu-image text-center text-lg-left wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <img src={illustration} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="wcu-text">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">What We Do</span>
                                    <h2 className="title">Why Choose  <br /> Web Studio Labs</h2>
                                </div>
                                <p>
                                We have worked for small and big companies, offering an assortment of services that range from greenfield project development life cycle to legacy project rescues, nearshore outsourcing, and so on.
                                </p>
                                <ul className="wcu-list">
                                    <li>
                                        <i className="far fa-check-circle" /> Experienced Software Engineers  
                                    </li>
                                    <li>
                                        <i className="far fa-check-circle" /> Variaty of Technologies
                                    </li>
                                    <li>
                                        <i className="far fa-check-circle" /> Fast &amp; Affordable Development
                                    </li>
                                </ul>
                                <Link to="/careers" className="main-btn main-btn-4">Join With Us</Link>
                            </div>
                        </div>
                    </div>
                    <img src={line1} alt="shape" className="line-shape-one" />
                    <img src={line2} alt="shape" className="line-shape-two" />
                </div>
            </div>
        </section>
    );
}

export default Whyus;