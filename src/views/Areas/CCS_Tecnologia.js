import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import C1W from "../../assets/img/partners/white/avaya.png";
import C2W from "../../assets/img/partners/white/genesys.png";
import C3W from "../../assets/img/partners/white/mitrol.png";
import C4W from "../../assets/img/partners/white/s1gateway.png";
import C5W from "../../assets/img/brand/CCS_Blanco.png";
import CAPP from "../../assets/img/brand/CCS_APP.png";

import app1 from "../../assets/img/brand/app1.PNG";
import app2 from "../../assets/img/brand/app2.PNG";

import dashboard from "../../assets/img/brand/dashboard.png";

import C1T from "../../assets/img/partners/transparent/avaya.png";
import C2T from "../../assets/img/partners/transparent/genesys.png";
import C3T from "../../assets/img/partners/transparent/mitrol.png";
import C4T from "../../assets/img/partners/transparent/s1gateway.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content">
          <div className="slide">
            <Zoom>
              <h1>Tecnología</h1>
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
                    onClick={() => (window.location.href = "/#Tecnologia/1")}
                  />
                  <p>Avaya</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Cosourcing"
                    src={C2W}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Tecnologia/2")}
                  />
                  <p>Genesys</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Cosourcing"
                    src={CAPP}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Tecnologia/5")}
                  />
                  <p>Aplicación CCS</p>
                </div>
              </div>
            </Zoom>

            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    alt="Calidad"
                    src={C3W}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Tecnologia/3")}
                  />
                  <p>Mitrol</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Capacitación"
                    src={C4W}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Tecnologia/4")}
                  />
                  <p>S1 Gateway</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Capacitación"
                    src={C5W}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Tecnologia/6")}
                  />
                  <p>Dashboards Online</p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <br />
            <br />
            <br />
            <br />
            <br />

            <img
              src={C1T}
              width={500}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                backgroundColor: "rgba(255,255,255,0.7)",
                padding: "2vw",
                borderRadius: "5px"
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <p>
              Avaya Inc. es una empresa lider en telecomunicaciones que se
              especializa en el sector de la telefonía y centros de llamadas.
              Antiguamente Avaya formaba parte de la Empresa Lucent
              Technologies, Tiene unos 18,000 empleados desde 2007, el 40% de
              los cuales se encuentran fuera de los EE. UU..
            </p>
          </div>
          <div className="slide">
            <br />
            <br />
            <br />

            <img
              src={C2T}
              width={500}
              height={200}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                backgroundColor: "rgba(255,255,255,0.7)",
                padding: "-5vw",
                borderRadius: "5px"
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <p>
              Genesys es una empresa que vende experiencia del cliente y
              tecnología de centros de llamadas para medianas y grandes
              empresas. Genesys vende software basado tanto en computación en la
              nube como on-premises. La empresa tiene su sede en Daly City,
              California2 y cuenta con oficinas en Canadá, América Latina,
              Europa, Medio Oriente, África, Asia, y Australia
            </p>
          </div>
          <div className="slide">
            <br />
            <br />

            <img
              src={C3T}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                backgroundColor: "rgba(255,255,255,0.7)",
                padding: "-5vw",
                borderRadius: "5px"
              }}
            />
            <br />
            <br />
            <br />
            <p>
              Empresa argentina con más de30 años de experiiencia y presencia en
              operaciones de Contact Center. Ofrece soluciones que simplifican
              todas las interacciones con sus clientes, generando un valor
              diferencial en cada contacto, brindando una verdadera atención
              omnicanal.
            </p>
          </div>
          <div className="slide">
            <br />
            <br />
            <br />
            <br />
            <br />
          

            <img
              src={C4T}
              width={400}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                backgroundColor: "rgba(255,255,255,0.7)",
                padding: "5vw",
                borderRadius: "5px"
              }}
            />

            <br />
            <br />
            <br />
            <br />
            <p>
              S1 Gateway es una plataforma de atención al cliente que optimiza
              las experiencias de los usuarios. Hace que sea sencillo mejorar la
              relación entre personas y empresas, integrando en una única
              plataforma la atención de todos los canales digitales. Comprende y
              deriva cada mensaje al agente o chatbot que corresponda para
              optimizar procesos y reducir los tiempos de atención.
            </p>
          </div>
          <div className="slide">
            <br />
            <br />
            <br />
            <h2>Aplicación CCS</h2>
            <p>
              Desarrollamos una aplicación para iOS y Android en la que podrás
              visualizar en tiempo real los principales indicadores de tu
              servicio
            </p>
            <br />

            <img
              src={app1}
              width={200}
              alt="logo"
              className="img-fluid"
              style={{ marginRight: "2vw" }}
            />
            <img src={app2} width={200} alt="logo" className="img-fluid" />
          </div>
          <div className="slide">
            <h2>Dashboards Web</h2>
            <p>
              Por medio de una sencilla interfaz, podras revisar en tiempo real
              los datos de tu servicio desde cualquier navegador, para ayudarte
              a tomar decisiones en el momento
            </p>
            <br />

            <img src={dashboard} width={900} alt="logo" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
