import React from 'react'
import { Footer } from './Footer'
import { Header2 } from './Header2';

export const Contact = () => {
    return (
        <div>
            <Header2 />
            <section className="about-section style-2 style-3 style-4 padding-tb">
                <div className="container">
                    <div className="section-header">
                        <br /><br />
                        <h2>Contáctenos</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="lab-item">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="assets/images/address.png" alt="lab-thumb" width="50" height="51" />
                                </div>
                                <div className="lab-content">
                                    <h4>Dirección</h4>
                                    <ol class="list-group list-group-numbered">
                                        <li class="list-group-item">Calle 18 N° 43 - 65 Sector Playitas Arauca (Arauca)</li>
                                        <li class="list-group-item">Calle 77a No. 11 - 32 Bogotá, D.C.</li>

                                    </ol>

                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="assets/images/phone.png" alt="lab-thumb" width="50" height="51" />
                                </div>
                                <div className="lab-content">
                                    <h4>Números de teléfonos</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item">+57 3168301982</li>
                                        <li class="list-group-item">+57 3202285804 </li>
                                        <li class="list-group-item">(7) 8856875 Ext 162</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="assets/images/web.png" alt="lab-thumb" width="50" height="51" />
                                </div>
                                <div className="lab-content">
                                    <h4>Web</h4>
                                   <ul class="list-group">
                                        <li class="list-group-item">Email: fondosolidario@alcaravan.org.co</li>
                                        <li class="list-group-item">Sitio Web: www.alcaravan.org.co</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="gmaps-section">
                <div class="map-area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.465233260376!2d-70.77665728590401!3d7.071934318508118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6feb036d9cbf91%3A0xff4f923d26fee66d!2sFundación%20El%20Alcaraván!5e0!3m2!1ses-419!2sco!4v1587423852241!5m2!1ses-419!2sco" allowFullscreen title="myFrame"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}
