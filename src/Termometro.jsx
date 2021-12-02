import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export const Termometro = () => {
    return (
        <div>
            <section className="pos-section bgc-3 padding-tb" id="vamos">
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

                </div>
            </section><br /><br />
        </div>
    )
}
