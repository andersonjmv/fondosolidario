import React from 'react'
import { Footer } from './Footer'
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <div>
             <header className="header-section transparent-header pos-bg" id="header">
                <div className="header-area">
                    <div className="container">
                        <div className="primary-menu">
                            <div className="logo">
                                <a href="#header"><img src="assets/images/logo/pos.png" alt="logo" /></a>
                            </div>
                            <div className="main-area">
                                <div className="main-menu">
                                    <ul>
                                        <Link to="/"><li>Inicio</li></Link>
                                        
                                        <Link to="/contacto"> <li>Contáctenos</li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="contact-us padding-tb" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <ul className="contact-area">
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact/icon/01.png" alt="contact" />
                                    </div>
                                    <div className="content">
                                        <h6>Our Location</h6>
                                        <p>Calle 18 N° 43 - 65  <br /> Sector Playitas Arauca (Arauca)</p>
                                        <p>Calle 77a No. 11 - 32 <br /> Bogota DC</p>
                                    </div>
                                </li>
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact/icon/02.png" alt="contact" />
                                    </div>
                                    <div className="content">
                                        <h6>Phone Number</h6>
                                        <p>(+57)3168301982 - (+57)3202285804 - (7)8856875 Ext 162<br /> +2154897369</p>
                                    </div>
                                </li>
                                <li className="contact-item">
                                    <div className="contact-icon">
                                        <img src="assets/images/contact/icon/03.png" alt="contact" />
                                    </div>
                                    <div className="content">
                                        <h6>Email Address</h6>
                                        <p>hello@CodexCoder <br /> hello@codexcoder.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="gmaps-section">
                <div class="map-area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.465233260376!2d-70.77665728590401!3d7.071934318508118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6feb036d9cbf91%3A0xff4f923d26fee66d!2sFundación%20El%20Alcaraván!5e0!3m2!1ses-419!2sco!4v1587423852241!5m2!1ses-419!2sco"  allowfullscreen title="myFrame"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}
