/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/man-with-earth-02.png'

class Content extends Component {
    render() {

        return (
            <section className="contact-section contact-page section-gap-top">
                <div className="container">
                    <div className="contact-info">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="illustration-img text-center">
                                    <img src={illustration} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                                <div className="contact-info-content">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Get In Touch</span>
                                        <h2 className="title">Need Any Help For Business &amp; Consulting</h2>
                                    </div>
                                    <p>
                                        We have the compromise to provide the best services to our clients.  
                                        Solving complex problems are our expertise and we are always ready to help you.
                                    </p>
                                    <ul>
                                        <li className="phone">
                                            <Link to="tel:+0123456789"><i className="far fa-phone" />+012 (345) 6789</Link>
                                        </li>
                                        <li><i className="far fa-envelope-open" /><Link to="#">contact@webstudiolabs.com</Link></li>
                                        <li><i className="far fa-map-marker-alt" />Portland Oregon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form grey-bg">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-10">
                                <div className="section-title text-center mb-40">
                                    <h2 className="title">Don’t Hesited To Contact Us</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Full Name" />
                                                <span className="icon"><i className="far fa-user-circle" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="email" placeholder="Your Email Address" />
                                                <span className="icon"><i className="far fa-envelope-open" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Phone" />
                                                <span className="icon"><i className="far fa-phone" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group textarea mb-30">
                                                <textarea placeholder="Write Message" defaultValue={""} />
                                                <span className="icon"><i className="far fa-pencil" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="main-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-1600">
                    <div className="contact-map">
                        
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.248342703538!2d-122.62196486693324!3d45.505079171899794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a08a0ce32315%3A0xf4ed18ece86e1491!2s4330%20SE%20Division%20St%2C%20Portland%2C%20OR%2097206!5e0!3m2!1sen!2sus!4v1654727027297!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;