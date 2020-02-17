import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import S1 from "../../assets/img/services/1.jpg";
import S2 from "../../assets/img/services/2.jpg";
import S3 from "../../assets/img/services/3.jpg";
import S4 from "../../assets/img/services/4.jpg";
import S5 from "../../assets/img/services/5.jpg";
import S6 from "../../assets/img/services/6.jpg";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <div className="slide">
            <Zoom>
              <h1>Productos</h1>
            </Zoom>
            <br />
            <br />
            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    alt="Outsourcing"
                    src={S1}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Productos/1")}
                  />
                  <p>Outsourcing</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Cosourcing"
                    src={S2}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Productos/2")}
                  />
                  <p>Cosourcing</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Consultoría"
                    src={S3}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Productos/3")}
                  />
                  <p>Consultoría</p>
                </div>
              </div>
            </Zoom>

            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    alt="Calidad"
                    src={S4}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Productos/4")}
                  />
                  <p>Calidad</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Capacitación"
                    src={S5}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Productos/5")}
                  />
                  <p>Capacitación</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Business Intelligence"
                    src={S6}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Productos/6")}
                  />
                  <p>Business Intelligence</p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <Zoom cascade left>
              <h1>Outsourcing</h1>
              <p>
                Ejecutamos la estrategia para alcanzar tus objetivos y medimos
                con precisión tus resultados.
              </p>

              <p>
                Nuestra amplia experiencia en la industria, nos permite hacer un
                uso eficiente de los recursos y cumplir tus objetivos de negocio
                por medio de nuestro capital humano y las mas novedosas
                tenologías en la industria
              </p>
              <br />
              <br />
              <img src={S1} alt="" />
            </Zoom>
          </div>
          <div className="slide">
            <Zoom cascade left>
              <h1>Cosourcing</h1>
              <p>Nuestra experiencia en tus instalaciones.</p>

              <p>
                Con nuestra amplia experiencia, operamos tu centro de contacto
                en tus instalaciones, logrando incremetos sustanciales en la
                efciencia de tu personal por medio de nuestra probada
                metodología
              </p>
              <br />
              <br />
              <img src={S2} alt="" />
            </Zoom>
          </div>
          <div className="slide">
            <Zoom cascade left>
              <h1>Consultoría</h1>
              <p>
                Te ayudamos a competir en la industria y a generar planes
                estratégicos de mejora.
              </p>
              <p>
                Nuestros consultores cuentan con una experiencia de más de 20
                años en la industria, permitiendonos brindarte las soluciones
                que necesitas.
              </p>
              <br />
              <br />
              <img src={S3} alt="" />
            </Zoom>
          </div>
          <div className="slide">
            <Zoom cascade left>
              <h1>Calidad</h1>
              <p>
                Establecemos los procesos para alcanzar la excelencia en el
                customer experience.
              </p>
              <p>
                Nuestra area de calidad certificada con ISO 9001 y nuestra
                metodologia on-demand, eleva los estandares de calidad y
                satisfacción de tus clientes.
              </p>
              <br />
              <br />
              <img src={S4} alt="" />
            </Zoom>
          </div>
          <div className="slide">
            <Zoom cascade left>
              <h1>Capacitación</h1>
              <p>
                Entendemos a tu personal y aportamos la especialización y el
                expertis que necesita para desarrollarse.
              </p>
              <p>
                Nuestro equipo de capacitación utiliza las mejores técnicas
                pedagogicas y las mejores herramientas disponibles para que el
                personal a capacitar, tenga un dominio excepcional de los
                conocimientos y habilidades necesarias para operar tu producto
              </p>
              <br />
              <br />
              <img src={S5} alt="" />
            </Zoom>
          </div>
          <div className="slide">
            <Zoom cascade left>
              <h1>Business Intelligence</h1>
              <p>
                Con la información de tu mercado te proponemos grandes caminos.
              </p>
              <p>
                Con base en métodos estadisticos de forecasting y analisis de
                tendencias, convertimos los datos que generan tus servicios en
                estrategias que incrementan las ventas y la satisfacción de tus
                clientes{" "}
              </p>
              <br />
              <br />
              <img src={S6} alt="" />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
