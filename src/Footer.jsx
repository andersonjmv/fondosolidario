import React from 'react'
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <div>
             <div className="app-footer">
        {/* gets mobile app section start here */}
        
        {/* gets mobile app section ending here */}
        {/* Footer Section Start Here */}
        <footer>
          <div className="footer-top padding-tb">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h6>Síguenos</h6>
                        </div>
                        <div className="content">
                          <p>#SerSolidariosNosUne Síguenos a través de nuestras redes sociales</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h6>Fundación el Alcaraván</h6>
                        </div>
                        <div className="content">
                          <ul>
                            <li><a href="#header">Inicio</a></li>
                        
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h6>Redes Sociales</h6>
                        </div>
                        <div className="content">
                          <ul>
                            <li><a href="https://www.facebook.com/FunAlcaraván"><i className="icofont-facebook" />Facebook</a></li>
                            <li><a href="https://www.instagram.com/FundaciónelAlcaraván/?hl=es"><i className="icofont-instagram" />Instagram</a></li>
                            <li><a href="https://www.youtube.com/user/FundaciónAlcaraván"><i className="icofont-youtube" />YouTube</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom style-2">
            <div className="container">
              <div className="section-wrapper">
                <p>© 2021 Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Section Ending Here */}
      </div>
      {/* scrollToTop start here */}
      <Link to="/" className="scrollToTop"><i className="icofont-swoosh-up" /><span className="pluse_1" /><span className="pluse_2" /></Link>
      {/* scrollToTop ending here */}
        </div>
    )
}
