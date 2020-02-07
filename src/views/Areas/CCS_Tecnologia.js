import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import C1W from "../../assets/img/partners/white/avaya.png";
import C2W from "../../assets/img/partners/white/genesys.png";
import C3W from "../../assets/img/partners/white/mitrol.png";
import C4W from "../../assets/img/partners/white/s1gateway.png";

import C1T from "../../assets/img/partners/transparent/avaya.png";
import C2T from "../../assets/img/partners/transparent/genesys.png";
import C3T from "../../assets/img/partners/transparent/mitrol.png";
import C4T from "../../assets/img/partners/transparent/s1gateway.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
