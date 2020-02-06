import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import avant from "../../assets/img/brand/avant.png";
import equsports from "../../assets/img/brand/equsport.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <div className="info-box">
            <Zoom left>
              <div className="info-item">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque at assumenda, necessitatibus soluta nulla similique
                  voluptatum vero ipsa officia obcaecati, perspiciatis quos
                  placeat. Corrupti voluptatibus dolorum maxime, consectetur
                  beatae laborum.
                </p>
              </div>
            </Zoom>
            <Zoom up delay={250}>
              <div className="info-item">
                <img
                  src={avant}
                  width={200}
                  alt="logo"
                  className="img-fluid"
                  style={{
                    filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                  }}
                />
              </div>
            </Zoom>
            <Zoom rigth delay={500}>
              <div className="info-item">
                <img
                  src={equsports}
                  width={200}
                  alt="logo"
                  className="img-fluid"
                  style={{
                    filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                  }}
                />
              </div>
            </Zoom>
            <Zoom down delay={750}>
              <div className="info-item">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  aperiam delectus eos ipsa ex molestias magni rerum itaque aut
                  corrupti eligendi iure fuga, ut possimus animi ullam harum
                  consequuntur error?
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
