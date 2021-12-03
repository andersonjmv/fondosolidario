import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>

      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-body">
              <img src="assets/images/modal/Flyer_1.jpg" alt="Flyer"/>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu pos-bg">
        <nav className="mobile-header">
          <div className="header-logo">
            <Link to="/"><img src="assets/images/logo.png" alt="logo" /></Link>
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
                <li><a href="#mas">Conocer más</a></li>
                <li><strong><Link to="#causas">Causa social</Link></strong>

                </li>
                <li><a href="#causas"></a>¿Cómo vamos?</li>
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

              <div className="main-area">
                <div className="main-menu">
                  <ul>
                    <li><a href="#mas">Conocer más</a>

                    </li>
                    <li><a href="#causas">Causa social</a>

                    </li>
                    <li><a href="#donar">¿Cómo donar?</a></li>
                    <li><a href="#vamos">¿Cómo vamos?</a></li>
                    <li><Link to="/contacto">Contáctenos</Link></li>
                    <li><Link to="/2020">Informe 2020</Link></li>
                  </ul>
                </div>

              </div>
              <div className="logo">
                <Link to="/"><img src="assets/images/logo.png" alt="logo" /></Link>
              </div>
            </div>
          </div>
        </div>
      </header>


    </div>
  )
}
