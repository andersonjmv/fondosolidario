import React from 'react'

export const Banner = () => {
    return (
        <div>
             <section className="banner-section style-5">
        <div className="pos-banner-shape">
          <div className="pos-shape-1">
            <img src="assets/images/banner/pos/bg.png" alt="pos-banner" />
          </div>
          <div className="pos-shape-2">
            <img src="assets/images/banner2.png" alt="pos-banner" />
          </div>
        </div>
        <div className="banner-area">
          <div className="container">
            <div className="row no-gutters align-items-center">
              <div className="col-xl-6 col-12">
                <div className="content-part">
                  <div className="section-header style-2">
                    <h2>Fondo Solidario</h2>
                    <p>El Fondo Solidario es una iniciativa de los trabajadores y contratistas de SierraCol Energy y de la Fundación El Alcaraván para solidarizarnos con nuestros vecinos. Esta iniciativa es administrada por la Fundación El Alcaraván.</p>
                    <a href="#mas" className="lab-btn"><span>Conocer más</span></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="section-wrapper">
                  <div className="banner-thumb">
                    <img src="assets/images/fs.png" alt="pos-banner" />
                    <div className="thumb-shape">
                      <div className="th-shape th-shape-1"><img src="assets/images/float.svg" alt="th-shape" /></div>
                      {/* <div className="th-shape th-shape-2"><img src="assets/images/banner/pos/shape/02.png" alt="th-shape" /></div>
                      <div className="th-shape th-shape-3"><img src="assets/images/banner/pos/shape/03.png" alt="th-shape" /></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
