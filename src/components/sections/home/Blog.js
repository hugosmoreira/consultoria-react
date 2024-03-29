import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/latest-post/001.jpg'
import img2 from '../../../assets/img/latest-post/002.jpg'
import img3 from '../../../assets/img/latest-post/003.jpg'

const blogblock = [
    { img: img1, title: 'What is Artificial Intelligence?', postdate: '25 May 2022', text: 'Artificial Intelligence is a concept that belongs to computing and consists of the ability of machines', linktext: 'Learn More' },
    { img: img2, title: '8 Examples and Applications of Artificial Intelligence in Business', postdate: '02 Feb 2022', text: 'Today, Artificial Intelligence is used in various industries and segments of society', linktext: 'Learn More' },
    { img: img3, title: 'How are companies using Artificial Intelligence as a competitive advantage?', postdate: '13 May 2022', text: 'Artificial Intelligence is present in many sectors and industries.', linktext: 'Learn More' },
]

function Blog(props) {
    return (
        <section className="latest-post-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-8 col-10 col-tiny-12">
                        <div className="section-title left-border">
                            <span className="title-tag">Important Articles</span>
                            <h2 className="title">Importance of Leads <br /> Latest News &amp; Blog</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-10 col-tiny-12">
                        <div className="text-md-right mt-30 mt-md-0">
                            <Link to="/bloggrid" className="main-btn">View All News</Link>
                        </div>
                    </div>
                </div>
                <div className="latest-post-loop row mt-50 justify-content-center">
                    {blogblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-10 col-tiny-12 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="800ms">
                            <div className="latest-post-box">
                                <div className="post-thumb-wrap">
                                    <div className="post-thumb bg-img-c" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    </div>
                                </div>
                                <div className="post-desc">
                                    <span className="post-date"><i className="far fa-calendar-alt" />{item.postdate}</span>
                                    <h3 className="title">
                                        <Link to="/blogdetail">
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p>{item.text}</p>
                                    <Link to="/blogdetail" className="post-link">
                                        {item.linktext} <i className="far fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;