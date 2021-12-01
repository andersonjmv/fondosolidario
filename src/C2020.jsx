import React from 'react'
import { Footer } from './Footer'
import { Header2 } from './Header2'


export const C2020 = () => {
  return (
    <div>
      <Header2 />
      <br />
      <br />
      <br />
      <br />
      <section className="market-range-section padding-tb">
        <div className="container">
          <div className="top-area">
            <div className="row align-items-center">
             
              <div className="col">
                <div className="section-header style-2">
                  <h2>¿Cómo nos fue?</h2>
                </div>
                <div className="section-wrapper">
                  <div className="skill-bar-wrapper">
                    <div className="skill-item">
                      <div className="skill-title">
                        <div className="left">Empleados de SierraCol Energy y El Alcaraván</div>
                        <div className="right"><h5>53%</h5></div>
                      </div>
                      <div className="skillbar-container clearfix" data-percent="85%">
                        <div className="skills" style={{background: 'linear-gradient(to top, rgb(255, 79, 88), rgb(255, 180, 0))', width: '85%', overflow: 'hidden'}} />
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-title">
                        <div className="left">SierraCol Energy</div>
                        <div className="right"><h5>25%</h5></div>
                      </div>
                      <div className="skillbar-container clearfix" data-percent="70%">
                        <div className="skills" style={{background: 'linear-gradient(to top, rgb(255, 79, 88), rgb(255, 180, 0))', width: '70%', overflow: 'hidden'}} />
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-title">
                        <div className="left">Empresas contratistas</div>
                        <div className="right"><h5>22%</h5></div>
                      </div>
                      <div className="skillbar-container clearfix" data-percent="60%">
                        <div className="skills" style={{background: 'linear-gradient(to top, rgb(255, 79, 88), rgb(255, 180, 0))', width: '60.0001%', overflow: 'hidden'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <section className="pricing-table style-2 padding-tb">
        <div className="container">
          <div className="section-wrapper">

            <div className="pricing-item">
              <div className="pricing-inner">
                <div className="pricing-head">
                  <h4>Arauca</h4>
                  <p>8 causas sociales</p>
                </div>
                <div className="pricing-body">
                  <div className="price">
                    <h2>Causas</h2>
                    <span>Beneficiados</span>
                  </div>
                  <div className="price-list">
                    <ul>
                      <li>Mujeres microempresarias / 442</li>
                      <li>Heroes de la salud / 20</li>
                      <li>Arte, cultura y folclor de Arauca / 9</li>
                      <li>Mujeres en dialisis / 21</li>
                      <li>Banco de juguetes / 52</li>
                      <li>Recicladores de Caño Jesus / 49</li>
                      <li>Vendedores ambulantes / 350</li>
                      <li>Artesanos unidos / 7</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <div className="pricing-item">
              <div className="pricing-inner">
                <div className="pricing-head">
                  <h4>Santander</h4>
                  <p>4 causas sociales</p>
                </div>
                <div className="pricing-body">
                  <div className="price">
                    <h2>Causas</h2>
                    <span>Beneficiados</span>
                  </div>
                  <div className="price-list">
                    <ul>
                      <li>Banco de juguetes / 2278</li>
                      <li>Huertas familiares para la seguridad alimentariia / 111</li>
                      <li>Artesanias para la vida / 20</li>
                      <li>Artesanos unidos / 7</li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
