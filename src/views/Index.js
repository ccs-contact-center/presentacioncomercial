import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import pelicula from "../assets/img/backgrounds/fondocolor.mp4";
import "../index.css";
import logo from "../assets/img/brand/logo.png";

import Grupo from "./Areas/Grupo";
import SIMIndex from "./Areas/SIM_Index";
import SIMBrands from "./Areas/SIM_Brands";
import SIMFacturacion from "./Areas/SIM_Facturacion";
import SIMClientes from "./Areas/SIM_Clientes";
import CCSIndex from "./Areas/CCS_Index";
import Socios from "./Areas/CCS_Socios";
import CCSServicios from "./Areas/CCS_Servicios";

class Index extends Component {
  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <video id="bg" loop muted autoPlay>
          <source src={pelicula} type="video/mp4" />
    </video>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          onLeave={this.onLeave.bind(this)}
          verticalCentered={false}
          anchors={["Inicio", "Indice"]}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="content">
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />
                  </div>
                </div>
                <Grupo />
                <SIMIndex />
                <SIMBrands />
                <SIMFacturacion />
                <SIMClientes />
                <CCSIndex />
                <Socios />
                <CCSServicios />

                {/*############################################################# AREAS #############################################################*/}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
