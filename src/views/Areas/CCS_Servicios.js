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

import os1 from "../../assets/img/servicios/outsourcing1.jpg";
import os2 from "../../assets/img/servicios/outsourcing2.png";
import cs1 from "../../assets/img/servicios/cosourcing1.jpg";
import cs2 from "../../assets/img/servicios/cosourcing2.jpg";
import consultoria1 from "../../assets/img/servicios/consultoria1.jpg";
import consultoria2 from "../../assets/img/servicios/consultoria2.jpg";
import qa1 from "../../assets/img/servicios/qa1.jpg";
import qa2 from "../../assets/img/servicios/qa2.jpg";
import capa1 from "../../assets/img/servicios/capacitacion1.png";
import capa2 from "../../assets/img/servicios/capacitacion2.jpg";
import bi1 from "../../assets/img/servicios/bi1.jpg";
import bi2 from "../../assets/img/servicios/bi2.jpg";

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
            <h1>Outsourcing</h1>
            <Zoom cascade right>
              <div className="info-box">
                <div className="info-item">
                  <p>
                    Implementamos y operamos tu contact center en nuestras
                    instalaciones con personal altamente capacitado y la máxima
                    fiabilidad en el servicio.
                  </p>
                </div>
                <div className="info-item">
                  <img src={os1} alt="" width={350} className="imgCheck" />
                </div>

                <div className="info-item">
                  <img src={os2} alt="" width={400} className="imgCheck" />
                </div>
                <div className="info-item">
                  <p>
                    Diseñamos la estrategia perfecta para proporcionar un
                    servicio único y omnicanal,con la máxima calidad y cercano a
                    tus usuarios finales, por medio de interaciones telefónicas,
                    e-mail, chats y redes sociales, cubriendo satisfactoriamente
                    todos los perfiles de tus clientes.
                  </p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <Zoom cascade left>
              <h1>Cosourcing</h1>

              <div className="info-box">
                <div className="info-item">
                  <p>
                    Con nuestra amplia experiencia, operamos tu contact center
                    en tus propias instalaciones, logrando sustanciales
                    incrementos en la productividad y efectividad de tu personal
                  </p>
                </div>
                <div className="info-item">
                  <img src={cs1} alt="" width={350} className="imgCheck" />
                </div>

                <div className="info-item">
                  <img src={cs2} alt="" width={400} className="imgCheck" />
                </div>
                <div className="info-item">
                  <p>
                    Te asesoramos para mejorar tus procesos y ejecutarlos de la
                    manera mas eficiente, para reflejarlo en la calidad del
                    servicio a tus usuarios finales
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <h1>Consultoría</h1>

            <Zoom cascade right>
              <div className="info-box">
                <div className="info-item">
                  <p>
                    Te ayudamos a competir en la industria y a generar planes
                    estratégicos de mejora.
                  </p>
                </div>
                <div className="info-item">
                  <img
                    src={consultoria1}
                    alt=""
                    width={350}
                    className="imgCheck"
                  />
                </div>

                <div className="info-item">
                  <img
                    src={consultoria2}
                    alt=""
                    width={400}
                    className="imgCheck"
                  />
                </div>
                <div className="info-item">
                  <p>
                    Nuestros consultores cuentan con una experiencia de más de
                    20 años en la industria, permitiendonos brindarte las
                    soluciones que necesitas.
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <h1>Calidad</h1>

            <Zoom cascade right>
              <div className="info-box">
                <div className="info-item">
                  <p>
                    Establecemos los procesos para alcanzar la excelencia en el
                    customer experience.
                  </p>
                </div>
                <div className="info-item">
                  <img src={qa1} alt="" width={350} className="imgCheck" />
                </div>

                <div className="info-item">
                  <img src={qa2} alt="" width={400} className="imgCheck" />
                </div>
                <div className="info-item">
                  <p>
                    Nuestra area de calidad certificada con ISO 9001 y nuestra
                    metodologia on-demand, eleva los estandares de calidad y
                    satisfacción de tus clientes.
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <h1>Capacitación</h1>

            <Zoom cascade right>
              <div className="info-box">
                <div className="info-item">
                  <p>
                    Entendemos a tu personal y aportamos la especialización y el
                    expertis que necesita para desarrollarse.
                  </p>
                </div>
                <div className="info-item">
                  <img src={capa1} alt="" width={350} className="imgCheck" />
                </div>

                <div className="info-item">
                  <img src={capa2} alt="" width={350} className="imgCheck" />
                </div>
                <div className="info-item">
                  <p>
                    Nuestro equipo de capacitación utiliza las mejores técnicas
                    pedagogicas y las mejores herramientas disponibles para que
                    el personal a capacitar, tenga un dominio excepcional de los
                    conocimientos y habilidades necesarias para operar tu
                    producto
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <h1>Business Intelligence</h1>

            <Zoom cascade right>
              <div className="info-box">
                <div className="info-item">
                  <p>
                    Con la información de tu mercado te proponemos grandes
                    caminos.
                  </p>
                </div>
                <div className="info-item">
                  <img src={bi1} alt="" width={350} className="imgCheck" />
                </div>

                <div className="info-item">
                  <img src={bi2} alt="" width={350} className="imgCheck" />
                </div>
                <div className="info-item">
                  <p>
                    Con base en métodos estadisticos de forecasting y analisis
                    de tendencias, convertimos los datos que generan tus
                    servicios en estrategias que incrementan las ventas y la
                    satisfacción de tus clientes
                  </p>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
