import React from 'react'
import { Link } from 'react-router-dom'

import icon1 from '../../../assets/img/icons/0.png'
import icon2 from '../../../assets/img/icons/002.png'
import icon3 from '../../../assets/img/icons/003.png'
import lines from '../../../assets/img/lines/07.png'

const serviceblock = [
    { icon: icon1, title: 'Software Development', text: 'Our team take care of all the development of your project' },
    { icon: icon2, title: 'Web & Mobile Development', text: 'Sed ut perspiciatis unde omnis iste natus erro volupta' },
    { icon: icon3, title: 'Technical Assessment', text: 'You have a big operation and want to make sure you are using the best practices' },
]

function Service(props) {
    return (
        <section className="service-section shape-style-one section-gap grey-bg">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-30">
                    <span className="title-tag">Comany Services</span>
                    <h2 className="title">We Provide Leads for Any Type of Business <br /> Leads from digital companies</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-8 col-10 col-tiny-12 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div className="service-box text-center">
                                <div className="icon">
                                    <img src={item.icon} alt="Icon" />
                                </div>
                                <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                <p>{item.text}</p>
                                <Link to="/servicedetail" className="service-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots-line">
                <img src={lines} alt="" />
            </div>
        </section>
    );
}

export default Service;