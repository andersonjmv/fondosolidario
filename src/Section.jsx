import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { Link } from 'react-router-dom'

export const Section = () => {

  const data = [
    {
      image: "assets/images/gaitan/1.jpeg",
    },
    {
      image: "assets/images/gaitan/2.jpeg",
    },
    {
      image: "assets/images/gaitan/3.jpg",
    },
    {
      image: "assets/images/gaitan/4.jpeg",
    },
    {
      image: "assets/images/gaitan/5.jpeg",
    },
    {
      image: "assets/images/gaitan/6.JPG",
    },
    {
      image: "assets/images/gaitan/7.JPG",
    },
    {
      image: "assets/images/gaitan/8.JPG",
    },
    {
      image: "assets/images/gaitan/9.JPG",
    },
    {
      image: "assets/images/gaitan/10.JPG",
    },
    {
      image: "assets/images/gaitan/11.JPG",
    },
    {
      image: "assets/images/gaitan/12.JPG",
    },
    {
      image: "assets/images/gaitan/13.JPG",
    },
    {
      image: "assets/images/gaitan/14.JPG",
    },
    {
      image: "assets/images/gaitan/15.JPG",
    },
    {
      image: "assets/images/gaitan/16.JPG",
    },
    {
      image: "assets/images/gaitan/17.JPG",
    },
    {
      image: "assets/images/gaitan/18.JPG",
    }
  ];

  return (
    <div>
      <section className="pos-section bgc-3 padding-tb" id="mas">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="pos-thmub">
                <img src="assets/images/collage.png" alt="pos-=thumb" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="pos-content-area">
                <div className="section-header style-2">
                  <h2>¿Qué es el Fondo Solidario?</h2>
                </div>
                <div className="section-wrapper">
                  <p>El Fondo Solidario es una iniciativa de los trabajadores y contratistas de SierraCol Energy y de la Fundación El Alcaraván para solidarizarnos con nuestros vecinos. Esta iniciativa es administrada por la Fundación El Alcaraván.</p>
                  <p>La primera campaña del Fondo Solidario se llevó a cabo en 2020, motivada por la necesidad de apoyar a las personas y comunidades más afectados por las consecuencias económicas, sociales y de salud de la pandemia del COVID-19. Gracias a la empatía, solidaridad y generosidad de los empleados de SierraCol y de la Fundación, de la Compañía y de algunos contratistas, el Fondo Solidario recaudó $237 millones. Los recursos fueron convertidos en ayudas materiales que fueron entregadas a doce causas sociales en Arauca y en el corregimiento El Centro, en Barrancabermeja, Santander.</p>
                </div>

              </div>
            </div>
            <br />
            <div className="col-lg-12" style={{ 'paddingTop': '15px' }}>
              <p>En 2021, estamos realizando una nueva campaña del Fondo Solidario, en beneficio de la comunidad araucana de la vereda El Placer, que ha sido golpeada por el duro invierno y ha perdido su escuela. Las escuelas rurales son vitales para la educación y formación de los niños y niñas, y son un espacio de encuentro para toda la comunidad. Con esta campaña también queremos hacer conciencia sobre la inevitable realidad del cambio climático y la importancia de adaptarse a sus consecuencias.</p>
              <p>Este 2021 podremos manifestar nuevamente nuestra empatía y generosidad a través del Fondo Solidario.</p>
              <Link to="/2020" className="lab-btn" ><span>Ver informe campaña: COVID-19, 2020</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pos-section bgc-3 padding-tb" id="causas">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6 col-10">
              <div className="video-responsive">
                <iframe width="530" height="305" src="https://www.youtube.com/embed/unlgu89M5Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="pos-content-area">
                <div className="section-header style-3">
                  <h3>Nuestra Causa Social</h3>
                  <h3>Unidos nuevamente por Arauca en 2021</h3>
                  <p>Para la campaña de 2021, hemos escogido una causa social que nos inspira: <strong>reconstruir la escuela Jorge Eliecer Gaitán, en la vereda El Placer.</strong></p>
                  <br />
                  <p>En la reciente temporada de lluvias, los estudiantes y la comunidad de El Placer, vereda del municipio de Arauquita, vieron cómo el río Arauca se desbordó y destruyó su escuela rural, donde estudiaban alrededor de 30 niños. Además, era el sitio de reunión de los más de 200 habitantes de la comunidad local. Por fortuna, no había nadie en la escuela cuando esto ocurrió.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <p>Hoy, los niños y adolescentes reciben clases en un lugar improvisado que ha sido prestado por una iglesia local. Lógicamente, carecen de espacio suficiente, de pupitres, tableros, y otros equipos necesarios para tener una educación de calidad mínima. Estas deficientes condiciones, sumadas al prolongado período durante el cual se suspendieron las clases presenciales debido a la pandemia, sin duda afectan de manera negativa su formación. Por lo que es urgente resolver la situación.</p>
              <p>En 2021, nuestra meta es recaudar $250 millones. Esto nos permitirá construir una nueva escuela, en un lugar seguro; entregar la dotación necesaria de muebles, equipos y materiales pedagógicos; y capacitar a los docentes de la vereda.</p>

            </div>

          </div>


        </div>
      </section>

      <section className="pos-section bgc-3 padding-tb" id="mas">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="pos-thmub">
                <div style={{
                  padding: "0 20px"
                }}>
                  <Carousel
                    data={data}
                    time={3000}
                    width="850px"
                    height="500px"
                    radius="10px"
                    slideNumber={true}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    style={{
                      textAlign: "center",
                      maxWidth: "850px",
                      maxHeight: "500px",
                      margin: "40px auto",
                    }}
                  />


                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="pos-content-area">
                <div className="section-header style-2">
                  <h2>La historia de la escuela</h2>
                  <h2>Jorge Eliecer Gaitán</h2>
                </div>
                <div className="section-wrapper">
                  <p>La iniciativa de construir una escuela para la vereda El Placer se remonta a 1987, cuando el señor Cerveleón Díaz presidía la Junta de Acción Comunal. Don Cerveleón y otros miembros de la comunidad estaban preocupados por la educación de sus hijos y, en ese entonces, la escuela a la que tenían acceso estaba bastante retirada. Por esta razón, decidieron iniciar la gestión con las autoridades respectivas.</p>
                  <p>El proyecto fue aprobado por la Secretaría de Educación, que entendió la necesidad de la comunidad. La escuela fue construida en un predio donado por la señora Lina Zambrano, y su primer docente, el profe Calle, sólo estuvo allí seis meses pues una enfermedad le obligó a retirarse. Un año después, en 1988, llegó el profe Julio Ramírez, quien tampoco contó con suerte ya que el río Arauca destruyó
                    por primera vez la Jorge Eliecer Gaitán. Durante los siguientes siete años, el profe Julio tuvo que dictar sus clases en una casa de la comunidad, antes de ser trasladado a la vereda Las Bancas. En 1995, lo reemplazó la profesora María Cristina Oviedo Rodríguez, quien hoy continúa al frente de la escuela veredal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pos-section bgc-3 padding-tb" id="mas">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-12">
              <div className="pos-content-area">
                <div className="section-wrapper">
                  <p>En ese año, la comunidad compró un lote al señor Víctor Torres y levantó un ranchón empleando parte de los materiales que se habían recuperado de la primera escuela. El esfuerzo de la comunidad permitió construir un aula, una batería sanitaria, un salón múltiple y una huerta escolar con cultivos de plátano y cacao. Pero una nueva creciente del río ocasionó la pérdida total de las instalaciones educativas.</p>
                  <p>La comunidad tuvo que esperar hasta el 2009 cuando el entonces alcalde de Arauquita, Francisco Vargas, destinó recursos para la reconstrucción. En esta oportunidad se construyeron un salón de clases multigrado, el restaurante escolar, una sala de informática, baterías sanitarias y una planta de tratamiento de agua.</p>
                  <p>Pero el 15 de julio del 2021, la fuerza del río Arauca se llevó la infraestructura, afectando el derecho a la educación de los pequeños de preescolar a quinto grado de primaria, y acabando con un espacio de uso social y comunitario aprovechado por los 200 habitantes de la vereda.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="pos-thmub">
                <img src="assets/images/coljeg.jpeg" alt="colegio" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}


