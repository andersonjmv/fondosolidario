import React from 'react'

export const Donar = () => {
    return (
        <div>
       <section className="faq-section padding-tb" id="donar">
        <div className="container">
          <div className="row justify-content-center flex-row-reverse">
            
            <div className="col-xl-6 col-12">
              <div className="faq-left-part">
                <div className="section-header style-2">
                  <h2 className="text-center">¿Cómo donar?</h2>
                  <br />
                  <h2>Puedes realizar tus aportes así:</h2>
                </div>
                <div className="section-wrapper">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <div className="accordion-list">
                        <div className="left">
                          <div className="icon" />
                        </div>
                        <div className="right">
                          <h6>Cuenta corriente El Alcaraván</h6>
                        </div>
                      </div>
                      <div className="accordion-answer">
                        <p>Cuenta Corriente BBVA Nº 073037905 a nombre de la Fundación El Alcaraván, NIT 800088424-1 y envía copia de consignación a fondosolidario@alcaravan.org.co</p>
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="accordion-list">
                        <div className="left">
                          <div className="icon" />
                        </div>
                        <div className="right">
                          <h6>Cuenta corriente fondo de empleados de SierraCol</h6>
                        </div>
                      </div>
                      <div className="accordion-answer">
                        <p></p>Cuenta Corriente BBVA Nº 073035677 a nombre del Fondo de Empleados de SierraCol Energy LLC, - FODESI, NIT 890.203.006 y envía copia de consignación a cartera@fodesi.com.co
                      </div>
                    </li>
                    <li className="accordion-item">
                      <div className="accordion-list">
                        <div className="left">
                          <div className="icon" />
                        </div>
                        <div className="right">
                          <h6>Descuento de nomina</h6>
                        </div>
                      </div>
                      <div className="accordion-answer">
                        <p>Para descuento de nómina, diligencia el formato de donación o envía nombre completo del asociado, número de identificación y valor a donar, desde el correo corporativo o el correo registrado en FODESI.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
