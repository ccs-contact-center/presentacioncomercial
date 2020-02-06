import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import SIM from "../../assets/img/brand/SIM_Blanco.png";
import CCS from "../../assets/img/brand/CCS_Blanco.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <Zoom>
            <h1>Nosotros</h1>
          </Zoom>
          <br />
          <br />
          <Zoom cascade>
            <div className="horizontalContent">
              <div className="avatarContent">
                <Avatar
                  alt="SIM"
                  src={SIM}
                  className="avatarBrand"
                  onClick={() => (window.location.href = "/#Indice/1")}
                />
                <p>SIM</p>
              </div>
              <div className="avatarContent">
                <Avatar
                  alt="Vivian Cheja"
                  src={CCS}
                  className="avatarBrand"
                  onClick={() => (window.location.href = "/#Indice/1")}
                />
                <p>CCS</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Comercial;
