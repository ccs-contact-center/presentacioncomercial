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
        <div className="content" style={{padding:'6px'}}>
          <Bounce>
            <h1>Principales Clientes</h1>
          </Bounce>
          
          <Bounce cascade left>
            <div>
              <img src={clientes} alt="" width={700} className="img-fluid" />
            </div>
          </Bounce>
          <Bounce>
            <p>...Más de 250 clientes en total</p>
          </Bounce>
        </div>
      </div>
    );
  }
}

export default Comercial;
