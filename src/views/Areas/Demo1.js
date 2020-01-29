import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import organigrama from "../../assets/img/organigrama.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1>Organigrama</h1>
            <br />
            <br />
            <img
              src={organigrama}
              alt=""
              style={{
                width: "45%",
                filter:
                  "invert(100%) sepia(0%) saturate(7500%) hue-rotate(90deg) brightness(100%) contrast(103%) opacity(90%) drop-shadow(3px 1px 4px #000000)"
              }}
            />
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h2>2</h2>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h2>3</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
