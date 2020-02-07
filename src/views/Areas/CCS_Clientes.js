import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Bounce from "react-reveal/Bounce";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <Bounce>
            <h1>Clientes</h1>
          </Bounce>
        </div>
      </div>
    );
  }
}

export default Comercial;
