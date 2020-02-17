import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Zoom";
import money from "../../assets/img/icons/money.png";
import people from "../../assets/img/icons/people.png";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content">
          <div className="info-box">
            <Zoom up delay={250}>
              <div className="info-item">
                <img
                  src={money}
                  width={200}
                  alt="logo"
                  className="img-fluid"
                  style={{
                    filter:
                      "drop-shadow(2px 4px 6px rgba(0,0,0,0.5)) invert(46%) sepia(9%) saturate(136%) hue-rotate(214deg) brightness(94%) contrast(83%) opacity(85%)"
                  }}
                />
              </div>
            </Zoom>
            <Zoom left>
              <div className="info-item">
                <h2>Volumen de Ventas</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque at assumenda, necessitatibus soluta nulla similique
                  voluptatum vero ipsa officia obcaecati, perspiciatis quos
                  placeat. Corrupti voluptatibus dolorum maxime, consectetur
                  beatae laborum.
                </p>
              </div>
            </Zoom>

            <Zoom down delay={750}>
              <div className="info-item">
                <h2>Colaboradores</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  aperiam delectus eos ipsa ex molestias magni rerum itaque aut
                  corrupti eligendi iure fuga, ut possimus animi ullam harum
                  consequuntur error?
                </p>
              </div>
            </Zoom>
            <Zoom rigth delay={500}>
              <div className="info-item">
                <img
                  src={people}
                  width={200}
                  alt="logo"
                  className="img-fluid"
                  style={{
                    filter:
                      "drop-shadow(2px 4px 6px rgba(0,0,0,0.5)) invert(46%) sepia(9%) saturate(136%) hue-rotate(214deg) brightness(94%) contrast(83%) opacity(85%)"
                  }}
                />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
