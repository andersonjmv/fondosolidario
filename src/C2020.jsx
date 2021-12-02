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
                  <p>Las generosas contribuciones de empleados y contratistas en el 2020 fueron destinadas a apoyar 12 causas sociales, beneficiando a 3.568 personas del departamento de Arauca y el corregimiento El Centro, en Santander.</p>
                  <p>Las personas y familias más necesitadas recibieron mercados; el personal de salud, que enfrentaba el riesgo más alto de contraer COVID en esos primeros meses de la pandemia, pudo contar con elementos de protección personal. También, entregamos insumos a dos asociaciones de artesanos, cuya actividad económica había sido interrumpida por la pandemia; y en dos escuelas rurales distribuimos juguetes didácticos para los pequeños que no podían regresar a clases presenciales. La gran mayoría de insumos, materiales y alimentos fueron comprados a proveedores de ambas regiones, para estimular las economías locales.</p>
                  <p>De la meta de los 400 millones COP, se reacaudaron 237 millones COP y sus aportes fueron de la siguiente manera:</p>
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
