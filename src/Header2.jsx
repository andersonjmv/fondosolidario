import React from 'react'
import { Link } from 'react-router-dom';

export const Header2 = () => {
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

                                <li><strong><Link to='/causa'>Causas sociales</Link></strong>

                                </li>
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
                                        <li><Link to="/">Inicio</Link>

                                        </li>
                                        <li><a href="#causas">Causas sociales</a></li>

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
