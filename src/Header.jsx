import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <div className="mobile-menu pos-bg">
        <nav className="mobile-header">
          <div className="header-logo">
            <a href="index-vpn.html"><img src="assets/images/logo.png" alt="logo" /></a>
          </div>
          <div className="header-bar">
            <span />
            <span />
            <span />
          </div>
        </nav>
        <nav className="mobile-menu">
          <div className="mobile-menu-area">
            <div className="mobile-menu-area-inner">
              <ul>
                <li><a href="#header">Inicio</a>  </li>
                <li>Pages
                  <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li>Services
                              <ul>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="service-single.html">Service Single</a></li>
                      </ul>
                    </li>
                    <li><a href="pricing-plan.html">Pricing Plan</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                    <li><a href="comingsoon.html">Coming Soon</a></li>
                    <li><a href="404.html">404</a></li>
                  </ul>
                </li>
                <li><strong><Link to='/causa'>Causas sociales</Link></strong>

                </li>
                <li><Link to="/2020">¿Cómo vamos?</Link>

                </li>
                <Link to="/contacto"> <li>Contáctenos</li></Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Menu Ending Here */}
      {/* desktop menu start here */}
      <header className="header-section transparent-header pos-bg" id="header">
        <div className="header-area">
          <div className="container">
            <div className="primary-menu">
              <div className="logo">
                <a href="#header"><img src="assets/images/logo.png" alt="logo" /></a>
              </div>
              <div className="main-area">
                <div className="main-menu">
                  <ul>
                    <li><a href="#header">Inicio</a>

                    </li>
                    <li><a href="#mas">Conocer más</a>

                    </li>
                    <li><a href="#causas">Causas sociales</a>

                    </li>
                    <li><Link to="/2020">¿Cómo vamos?</Link>

                    </li>
                    <Link to="/contacto"> <li>Contáctenos</li></Link>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}