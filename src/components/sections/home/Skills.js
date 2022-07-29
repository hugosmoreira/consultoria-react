import React from 'react'
import { Link } from 'react-router-dom'
import VisibilitySensor from "react-visibility-sensor"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

function Skills(props) {
    return (
        <section className="skill-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        {/* Skill Text Block */}
                        <div className="skill-text">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">Company Technologies</span>
                                <h2 className="title">We Have Many Resources <br /> of Business Leads</h2>
                            </div>
                            <p>
                            Leadfy is a Software that generated leads from the biggest digital companies in the market and its focused on delivering the best value for its customers. 
                            </p>
                            <p>
                            Our specialty is find the best leads for your business using cutting edge new technologies. We are very experienced in delivering all kinds of tech leads, such as e-commerce, e-learning, social networks, content management systems and process automation.
                            </p>
                            <Link to="/about" className="main-btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="piechart-boxes">
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 25 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#614fa0',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-presentation" />
                                </div>
                                <h4 className="title">Consulting</h4>
                            </div>
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 40 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#614fa0',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-money-bags" />
                                </div>
                                <h4 className="title">Technical Assessment</h4>
                            </div>
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 75 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#614fa0',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-invest" />
                                </div>
                                <h4 className="title">Web &amp; Mobile Development</h4>
                            </div>
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 80 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#614fa0',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-connector" />
                                </div>
                                <h4 className="title">Software Development</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;