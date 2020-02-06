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
                    onClick={() => (window.location.href = "/#Indice/1")}
                  />
                  <p>Outsourcing</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Cosourcing"
                    src={S2}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Indice/1")}
                  />
                  <p>Cosourcing</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Consultoría"
                    src={S3}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Indice/1")}
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
                    onClick={() => (window.location.href = "/#Indice/1")}
                  />
                  <p>Calidad</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Capacitación"
                    src={S5}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Indice/1")}
                  />
                  <p>Capacitación</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    alt="Business Intelligence"
                    src={S6}
                    className="avatarS"
                    onClick={() => (window.location.href = "/#Indice/1")}
                  />
                  <p>Business Intelligence</p>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="slide">
            <h1>Outsourcing</h1>
          </div>
          <div className="slide">
            <h1>Cosourcing</h1>
          </div>
          <div className="slide">
            <h1>Consultoría</h1>
          </div>
          <div className="slide">
            <h1>Calidad</h1>
          </div>
          <div className="slide">
            <h1>Capacitación</h1>
          </div>
          <div className="slide">
            <h1>Business Intelligence</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
