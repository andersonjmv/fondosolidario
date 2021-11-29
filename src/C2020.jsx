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
            <section className="pricing-table style-2 padding-tb">
        <div className="container">
          <div className="section-header">
            <h2>¿Como nos fue en 2020?</h2>
            <p>De los $237 millones recaudados, el 53% fue aportado por empleados de SierraCol Energy y El Alcaraván, 25% por SierraCol Energy y el 22% restante por empresas contratistas.</p>
          </div>
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
                      <li>Artesanias para la vida</li>
                      <li>Artesanos unidos</li>
                    
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
