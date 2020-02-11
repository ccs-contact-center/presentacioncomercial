import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import C1W from "../../assets/img/certificaciones/white/iso9001.png";
import C2W from "../../assets/img/certificaciones/white/iso27001.png";
import C3W from "../../assets/img/certificaciones/white/itil.png";
import C4W from "../../assets/img/certificaciones/white/copc.png";
import C5W from "../../assets/img/certificaciones/white/stps.png";
import C6W from "../../assets/img/certificaciones/white/conocer.png";

import C1T from "../../assets/img/certificaciones/transparent/iso9001.png";
import C2T from "../../assets/img/certificaciones/transparent/iso27001.png";
import C3T from "../../assets/img/certificaciones/transparent/itil.png";
import C4T from "../../assets/img/certificaciones/transparent/copc.png";
import C5T from "../../assets/img/certificaciones/transparent/stps.png";
import C6T from "../../assets/img/certificaciones/transparent/conocer.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="bi">
        <div className="content">
          <div className="slide">
            <Zoom>
              <h1>Certificaciones</h1>
            </Zoom>
            <br />
            <br />
            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    alt="Outsourcing"
                    src={C1W}
                    className="avatarS"
                    onClick={() =>
                      (window.location.href = "/#Certificaciones/1")
                    }
                  />
                  <p>ISO 9001</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Cosourcing"
                    src={C2W}
                    className="avatarS"
                    onClick={() =>
                      (window.location.href = "/#Certificaciones/2")
                    }
                  />
                  <p>ISO 27001</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Consultoría"
                    src={C3W}
                    className="avatarS"
                    onClick={() =>
                      (window.location.href = "/#Certificaciones/3")
                    }
                  />
                  <p>ITIL</p>
                </div>
              </div>
            </Zoom>

            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    alt="Calidad"
                    src={C4W}
                    className="avatarS"
                    onClick={() =>
                      (window.location.href = "/#Certificaciones/4")
                    }
                  />
                  <p>COPC</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Capacitación"
                    src={C5W}
                    className="avatarS"
                    onClick={() =>
                      (window.location.href = "/#Certificaciones/5")
                    }
                  />
                  <p>STPS</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Business Intelligence"
                    src={C6W}
                    className="avatarS"
                    onClick={() =>
                      (window.location.href = "/#Certificaciones/6")
                    }
                  />
                  <p>CONOCER</p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <img
              src={C1T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
            <br />
            <br />
            <p>
              La certificación ISO 9001, garantiza que nuestros servicios tienen
              una alta calidad
            </p>
          </div>
          <div className="slide">
            <img
              src={C2T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
            <br />
            <br />
            <p>
              La seguridad de tu información es fundamental para nosotros, por
              lo cual contamos con la certificación ISO 27001, que garantiza la
              seguridad de tus datos
            </p>
          </div>
          <div className="slide">
            <img
              src={C3T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
            <br />
            <br />
            <p>
              Contamos con personal certificado en ITIL, cuyo enfoque hemos
              adoptado en la Gestión de nuestros servicios de TI, para alcanzar
              los objetivos estratégicos de negocio y satisfacer las necesidades
              del usuario.
            </p>
          </div>
          <div className="slide">
            <img
              src={C4T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
            <br />
            <br />
            <p>
              Tenemos personal certificado en COPC. Integramos conceptos y
              procesos de dicha norma para mejorar la calidad en los
              procedimientos operativos, además de gestionar, medir y capacitar
              a nuestro personal.
            </p>
          </div>
          <div className="slide">
            <img
              src={C5T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
            <br />
            <br />
            <p>
              Nustros instructores están certificados ante la Secretaría de
              Trabajo y Previsión Social (STPS)
            </p>
          </div>
          <div className="slide">
            <img
              src={C6T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
              }}
            />
            <br />
            <br />
            <p>
              La certificación CONOCER por competencias, garantiza altos
              estandares en capacitación, evaluacion y certificación
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
