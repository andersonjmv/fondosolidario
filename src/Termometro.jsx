import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export const Termometro = () => {
    return (
        <div>
            <section className="market-range-section padding-tb" id="vamos">
                <div className="container">
                    <div className="section-header style-2">
                        <h2 className="text-center">¿Cómo vamos?</h2>
                        <p className="text-center">La meta son $200.000.000 COP</p>
                        <br />
                    </div>
                    <ProgressBar
                        completed={34000000}
                        bgColor="#f68838"
                        height="60px"
                        labelAlignment="center"
                        baseBgColor="#cbcbc4"
                        labelColor="#ffffff"
                        transitionTimingFunction="linear"
                        animateOnRender
                        maxCompleted={200000000}
                        customLabel="$34.000.000"
                    />
                    <div className="bottom-area">
                        <div className="section-wrapper" style={{ justifyContent: 'center' }}>
                            <div className="contact-count-item">
                                <div className="contact-count-inner">
                                    <div className="contact-count-content">
                                        <h5 style={{ color: '#ffb400' }}><span className="counter">3</span></h5>
                                        <p style={{ textAlign: 'center' }}>APORTES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-count-item">
                                <div className="contact-count-inner">
                                    <div className="contact-count-content">
                                        <h5 style={{ color: '#ffb400' }}><span className="counter">3</span></h5>
                                        <p style={{ textAlign: 'center' }}>DONANTES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-count-item">
                                <div className="contact-count-inner">
                                    <div className="contact-count-content">
                                        <h5 style={{ color: '#ffb400' }}><span className="counter">0</span></h5>
                                        <p style={{ textAlign: 'center' }}>META FINAL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />

        </div>
    )
}
