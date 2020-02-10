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
      <div className="section">
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
              <br />
              <br />
              <img src={S1} alt="" />
            </Zoom>
          </div>
          <div className="slide">
            <Zoom cascade left>
              <h1>Cosourcing</h1>
              <p>Nuestra experiencia en tus instalaciones.</p>
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
