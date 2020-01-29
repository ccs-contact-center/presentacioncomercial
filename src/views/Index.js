import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import avatar1 from "../assets/img/avatars/1.jpg";
import avatar2 from "../assets/img/avatars/2.jpg";
import avatar3 from "../assets/img/avatars/3.jpg";
import avatar4 from "../assets/img/avatars/4.jpg";
import avatar5 from "../assets/img/avatars/5.jpg";
import avatar6 from "../assets/img/avatars/6.jpg";
import avatar7 from "../assets/img/avatars/7.jpg";

import icon1 from "../assets/img/icons/1.png";
import icon2 from "../assets/img/icons/2.png";
import icon3 from "../assets/img/icons/3.png";
import icon4 from "../assets/img/icons/4.png";
//import pelicula from "../assets/img/fondocolor.mp4";
import "../index.css";
import logo from "../assets/img/brand/logo.png";
import expe from "../assets/img/experiencia.png";
import check from "../assets/img/check.png";

class Index extends Component {
  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        {/*<video id="bg" loop muted autoPlay>
          <source src={pelicula} type="video/mp4" />
    </video>*/}

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          onLeave={this.onLeave.bind(this)}
          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="content">
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />

                    <h1>Presentación Comercial</h1>
                  </div>
                </div>

                <div className="section fp-auto-height-responsive">
                  <div className="content">
                    <Zoom>
                      <h1>¿Quienes Somos?</h1>

                      <br />

                      <p>
                        Somos una empresa mexicana parte de grupo SIM con más de
                        11,000 colaboradores, 16 años de vida y conformada por
                        un grupo de especialistas con 26 años de experiencia,
                        líderes en la gestión de centros de contacto.
                        Actualmente operamos más de 34 proyectos de diversos
                        sectores del mercado, como una empresa boutique y nos
                        especializamos en la operación, consultoría,
                        implementación, comercialización y servicios omnicanal,
                        con el objetivo de hacer del servicio una experiencia
                        única de atención
                      </p>
                    </Zoom>

                    <br />
                    <Bounce delay={1000} duration={1500}></Bounce>
                  </div>
                </div>
                <div className="section">
                  <div className="content">
                    <div className="slide">
                      <Zoom>
                        <h1>Nosotros</h1>
                        <p>
                          Nuestro equipo cuenta con un promedio de 26 años de
                          experiencia en la industria
                        </p>
                      </Zoom>
                      <br />
                      <br />
                      <Zoom cascade>
                        <div className="horizontalContent">
                          <div className="avatarcontent">
                            <Avatar
                              alt="Jeronimo Fernandez"
                              src={avatar1}
                              className="avatar"
                              onClick={() => alert("Test")}
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                          <div className="avatarcontent">
                            <Avatar
                              alt="Vivian Cheja"
                              src={avatar2}
                              className="avatar"
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                        </div>
                      </Zoom>
                      <Zoom cascade>
                        <div className="horizontalContent">
                          <div className="avatarcontent">
                            <Avatar
                              alt="Vivian Cheja"
                              src={avatar3}
                              className="avatar"
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                          <div className="avatarcontent">
                            <Avatar
                              alt="Vivian Cheja"
                              src={avatar4}
                              className="avatar"
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                          <div className="avatarcontent">
                            <Avatar
                              alt="Vivian Cheja"
                              src={avatar5}
                              className="avatar"
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                          <div className="avatarcontent">
                            <Avatar
                              alt="Vivian Cheja"
                              src={avatar6}
                              className="avatar"
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                          <div className="avatarcontent">
                            <Avatar
                              alt="Vivian Cheja"
                              src={avatar7}
                              className="avatar"
                            />
                            <p>John Doe</p>
                            <p>Dirección General</p>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="slide">
                      <Zoom left>
                        <Avatar className="avatarBig" alt="" src={avatar1} />
                      </Zoom>
                      <br />
                      <Zoom up>
                        <h2>John Doe</h2>
                        <h3>Director General</h3>
                      </Zoom>
                      <br />
                      <Zoom right>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Harum sint blanditiis exercitationem suscipit
                          doloremque labore aliquid magnam quod, dolorem,
                          ratione libero, qui aspernatur quia? Odit, quidem.
                          Veritatis, deserunt. Assumenda, a!
                        </p>
                      </Zoom>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="content">
                    <Zoom>
                      <h1>Nuestra Experiencia</h1>

                      <p>
                        CCS con sus 16 años ha creado una metodología con una
                        base de consultoría en la que gracias a esta unidad de
                        negocio nos ha permitido analizar más profundamente
                        nuestras oportunidades y sugerencias de mejora.
                      </p>
                    </Zoom>
                    <div
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex"
                      }}
                    >
                      <Bounce left>
                        <img
                          className="img-fluid"
                          src={expe}
                          alt="sim"
                          style={{ width: "35%" }}
                        />
                      </Bounce>
                      <br />
                      <Zoom>
                        <p style={{ marginTop: "40px", padding: "20px" }}>
                          Manteniéndonos como una empresa que ha evolucionado
                          para hacer funcionar nuestros modelos de negocio con
                          nuestros clientes a base de un método omnicanal,
                          adicional a otros medios que nos han permitido
                          adelantarnos a los clientes de nuestros clientes para
                          la mejora de la atención e incremento de las ventas.
                        </p>
                      </Zoom>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="content">
                    <div
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex"
                      }}
                    >
                      <Bounce up>
                        <div
                          style={{
                            backgroundColor: "rgba(100,100,100,0.8)",
                            height: "100%",
                            width: "30%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <img
                            src={icon1}
                            alt=""
                            style={{
                              width: "100%",
                              marginBottom: "20px"
                            }}
                          />
                          <h3>Somos</h3>
                          <h2>Expertos</h2>
                          <h3>
                            en rentabilizar proyectos por utilizar a la gente
                            adecuada en el momento adecuado
                          </h3>
                        </div>
                      </Bounce>
                      <Bounce down delay={250}>
                        <div
                          style={{
                            backgroundColor: "rgba(192,3,39,0.8)",
                            height: "100%",
                            width: "30%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <h3>Somos</h3>
                          <h2>Flexibles</h2>
                          <h3>
                            al crear modelos personalizados para cada uno de
                            nuestros clientes por tipo de proyecto
                          </h3>
                          <img
                            src={icon2}
                            alt=""
                            style={{
                              width: "100%",
                              marginBottom: "20px"
                            }}
                          />
                        </div>
                      </Bounce>
                      <Bounce up delay={500}>
                        <div
                          style={{
                            backgroundColor: "rgba(100,100,100,0.8)",
                            height: "100%",
                            width: "30%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <img
                            src={icon3}
                            alt=""
                            style={{
                              width: "100%",
                              marginBottom: "20px"
                            }}
                          />
                          <h3>Staffing</h3>
                          <h2>Omnicanal</h2>
                          <h3>
                            combinando las mejores practicas de cada medio de
                            interacción por cada unidad de negocio
                          </h3>
                        </div>
                      </Bounce>
                      <Bounce down delay={750}>
                        <div
                          style={{
                            backgroundColor: "rgba(192,3,39,0.8)",
                            height: "100%",
                            width: "30%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <h3>
                            Combinación de elementos de infraestructura y
                            humanos para
                          </h3>
                          <h2>Optimizar</h2>
                          <h3>multiples proyectos</h3>
                          <br />
                          <br />
                          <img
                            src={icon4}
                            alt=""
                            style={{
                              width: "70%",
                              marginBottom: "20px",
                              filter:
                                "invert(75%) sepia(34%) saturate(88%) hue-rotate(323deg) brightness(86%) contrast(76%) opacity(70%)"
                            }}
                          />
                        </div>
                      </Bounce>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="content">
                    <Zoom>
                      <h1>Lorem ipsum </h1>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi sed, nostrum debitis fugit vitae incidunt
                        optio, recusandae unde minus minima vel tenetur aliquid
                        similique quaerat ea harum reiciendis? Voluptas, ipsum.
                      </p>
                    </Zoom>

                    <div
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex"
                      }}
                    >
                      <Bounce up>
                        <div
                          style={{
                            backgroundColor: "rgba(100,100,100,0.8)",
                            height: "350px",
                            width: "20%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <img
                            src={check}
                            alt=""
                            style={{
                              width: "50%",
                              marginBottom: "20px",
                              filter:
                                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(12deg) brightness(104%) contrast(103%) opacity(10%)"
                            }}
                          />

                          <br />
                          <ReactFitText compressor={"1.1"}>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Magni, necessitatibus neque. Eum
                              tenetur nam molestias maiores sed consectetur
                              iusto eligendi corrupti molestiae ullam. Corporis
                              minima quisquam deleniti ducimus quo veniam!
                            </p>
                          </ReactFitText>
                        </div>
                      </Bounce>
                      <Bounce down delay={500}>
                        <div
                          style={{
                            backgroundColor: "rgba(192,3,39,0.8)",
                            height: "350px",
                            width: "20%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <img
                            src={check}
                            alt=""
                            style={{
                              width: "50%",
                              marginBottom: "20px",
                              filter:
                                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(12deg) brightness(104%) contrast(103%) opacity(10%)"
                            }}
                          />
                          <br />
                          <ReactFitText compressor="1.1">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Magni, necessitatibus neque. Eum
                              tenetur nam molestias maiores sed consectetur
                              iusto eligendi corrupti molestiae ullam. Corporis
                              minima quisquam deleniti ducimus quo veniam!
                            </p>
                          </ReactFitText>
                        </div>
                      </Bounce>
                      <Bounce up delay={1000}>
                        <div
                          style={{
                            backgroundColor: "rgba(100,100,100,0.8)",
                            height: "350px",
                            width: "20%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <img
                            src={check}
                            alt=""
                            style={{
                              width: "50%",
                              marginBottom: "20px",
                              filter:
                                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(12deg) brightness(104%) contrast(103%) opacity(10%)"
                            }}
                          />
                          <br />
                          <ReactFitText compressor="1.1">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Magni, necessitatibus neque. Eum
                              tenetur nam molestias maiores sed consectetur
                              iusto eligendi corrupti molestiae ullam. Corporis
                              minima quisquam deleniti ducimus quo veniam!
                            </p>
                          </ReactFitText>
                        </div>
                      </Bounce>
                      <Bounce down delay={1500}>
                        <div
                          style={{
                            backgroundColor: "rgba(192,3,39,0.8)",
                            height: "350px",
                            width: "20%",
                            float: "left",
                            margin: "10px",
                            borderRadius: "15px",
                            padding: "3%"
                          }}
                        >
                          <img
                            src={check}
                            alt=""
                            style={{
                              width: "50%",
                              marginBottom: "20px",
                              filter:
                                "invert(100%) sepia(0%) saturate(7500%) hue-rotate(12deg) brightness(104%) contrast(103%) opacity(10%)"
                            }}
                          />
                          <br />
                          <ReactFitText compressor="1.1">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Magni, necessitatibus neque. Eum
                              tenetur nam molestias maiores sed consectetur
                              iusto eligendi corrupti molestiae ullam. Corporis
                              minima quisquam deleniti ducimus quo veniam!
                            </p>
                          </ReactFitText>
                        </div>
                      </Bounce>
                    </div>
                  </div>
                </div>
                {/*############################################################# AREAS #############################################################*/}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
