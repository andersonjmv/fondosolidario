import React from 'react'
import { Link } from 'react-router-dom';

export const Section = () => {
  return (
    <div>
      <div className="service-section style-5 padding-tb" id="mas">
        <div className="section-header">
          <h2>¿Qué es el Fondo Solidario?</h2>
          <p>El Fondo Solidario es una iniciativa de los trabajadores y contratistas de SierraCol Energy y de la Fundación El Alcaraván para solidarizarnos con nuestros vecinos. Esta iniciativa es administrada por la Fundación El Alcaraván.</p>
          <p>La primera campaña del Fondo Solidario se llevó a cabo en 2020, motivada por la necesidad de apoyar a las personas y comunidades más afectados por las consecuencias económicas, sociales y de salud de la pandemia del COVID-19. Gracias a la empatía, solidaridad y generosidad de los empleados de SierraCol y de la Fundación, de la Compañía y de algunos contratistas, el Fondo Solidario recaudó $237 millones. Los recursos fueron convertidos en ayudas materiales que fueron entregadas a doce causas sociales en Arauca y en el corregimiento El Centro, en Barrancabermeja, Santander.</p>
          <p>De los $237 millones recaudados, el 53% fue aportado por empleados de SierraCol Energy y El Alcaraván, 25% por SierraCol Energy y el 22% restante por empresas contratistas.</p>
        </div>
      </div>
      <section className="pos-section padding-tb">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6 col-12">
              <div className="pos-thmub">
                <img src="assets/images/jeg.jpg" alt="pos-=thumb" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="pos-content-area">
                <div className="section-header style-3">
                  <h3>Unidos nuevamente por Arauca en 2021</h3>
                  <p>Para la campaña de 2021, hemos escogido una causa social que nos inspira: reconstruir la escuela Jorge Eliecer Gaitán, en la vereda El Placer.</p>
                  <br />
                  <p>En la reciente temporada de lluvias, los estudiantes y la comunidad de El Placer, vereda del municipio de Arauquita, vieron cómo el río Arauca se desbordó y destruyó su escuela rural, donde estudiaban alrededor de 30 niños. Además, era el sitio de reunión de los más de 200 habitantes de la comunidad local. Por fortuna, no había nadie en la escuela cuando esto ocurrió.</p>
                  <br />
                  <p>Hoy, los niños y adolescentes reciben clases en un lugar improvisado que ha sido prestado por una iglesia local. Lógicamente, carecen de espacio suficiente, de pupitres, tableros, y otros equipos necesarios para tener una educación de calidad mínima. Estas deficientes condiciones, sumadas al prolongado período durante el cual se suspendieron las clases presenciales debido a la pandemia, sin duda afectan de manera negativa su formación. Por lo que es urgente resolver la situación.</p>
                </div>
                <div className="section-wrapper">
                  <Link to="/2020" className="lab-btn"><span>Informe Campaña 2020</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section style-5 padding-tb">
        <div className="container">
          <div className="section-header">
            <h2>¡Arauca nos necesita! </h2>
            <p>Es hora de volver a unir esfuerzos y retomar el Fondo Solidario, una iniciativa de los empleados y contratistas de SierraCol Energy y de la Fundación El Alcaraván, que iniciamos en 2020 para solidarizarnos con nuestros vecinos.</p>
          </div>
          <div className="section-header">
            <div className="video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8SjF8CyfNM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
