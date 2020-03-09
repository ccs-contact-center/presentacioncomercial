import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

//import { Avatar } from "@material-ui/core";

import clientes from "../../assets/img/clientessim.png";

import Bounce from "react-reveal/Bounce";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content">
          <Bounce>
            <h1>Principales Clientes</h1>
          </Bounce>
          <br />
          <Bounce cascade left>
            <div>
              <img src={clientes} alt="" width={800} />
            </div>
          </Bounce>
          <br /> <br />
          <Bounce>
            <p>...Más de 250 clientes en total</p>
          </Bounce>
        </div>
      </div>
    );
  }
}

export default Comercial;
