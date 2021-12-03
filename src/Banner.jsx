import React from 'react'

export const Banner = () => {
  return (
    <div>
      <section className="banner-section style-5">
        <div className="pos-banner-shape">
          <div className="pos-shape-1">

          </div>
          <div className="pos-shape-2" width="800px" height="700px">
            <img className="img-banner" src="assets/images/banner2.jpg" alt="banner2" />
          </div>
        </div>
        <div className="banner-area">
          <div className="container">
            <div className="row no-gutters align-items-center">
              <div className="col-xl-6 col-12">
                <div className="content-part">
                  <div className="section-header style-2">
                    <img src="assets/images/fs.png" alt="pos-banner" style={{ paddingBottom: "30px" }} />
                    <a href="#mas" className="lab-btn" ><span>Conocer más</span></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="section-wrapper">
                  <div className="banner-thumb">

                    <div className="thumb-shape">

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
