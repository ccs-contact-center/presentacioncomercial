import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import Zoom from "react-reveal/Bounce";
import { Avatar } from "@material-ui/core";
import avatar1 from "../../assets/img/avatars/1.jpg";
import avatar2 from "../../assets/img/avatars/2.jpg";

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="operaciones">
        <div className="content" style={{padding:'20px'}}>
          <div className="slide">
            <Zoom>
              <h1>Socios</h1>
            </Zoom>
            <br />
         
            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                 <div className="centrado-fila">
                 <Avatar
                    
                    style={{cursor:'pointer'}}
                    alt="Jerónimo Fernández"
                    src={avatar1}
                    className="avatar"
                    onClick={() => (window.location.href = "/#Socios/1")}
                  />
                 </div>
                  <p>Jerónimo Fernández Senderos</p>
                </div>
                <div className="avatarcontent">
                  <Avatar
                    style={{cursor:'pointer'}}
                    alt="Vivian Cheja"
                    src={avatar2}
                    className="avatar"
                    onClick={() => (window.location.href = "/#Socios/2")}
                  />
                  <p>Vivian Cheja Dabbah</p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <Zoom left>
              <Avatar className="avatarBig" alt="" src={avatar1} />
            </Zoom>
            <br />
            <br />
            <br />
            <br />
            <Zoom up>
              <h2>Jerónimo Fernández Senderos</h2>
            </Zoom>
            <br />
            {/*<Zoom right>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                sint blanditiis exercitationem suscipit doloremque labore
                aliquid magnam quod, dolorem, ratione libero, qui aspernatur
                quia? Odit, quidem. Veritatis, deserunt. Assumenda, a!
              </p>
            </Zoom>*/}
          </div>
          <div className="slide">
            <Zoom left className="centrado-fila">
              <Avatar className="avatarBig" alt="" src={avatar2} />
            </Zoom>
            <br />
           

            <Zoom up>
              <h2>Vivian Cheja Dabbah</h2>
            </Zoom>
          
            <Zoom right>
              <p>
                Con 30 años de experiencia, se especializa en la operación y
                optimización de centros de contacto y gestión de personal.
              <br/>
                A lo largo de su trayectoria, ha dirigido importantes firmas en
                la industria de los centros de contacto, logrando crecimientos
                de hasta 1,500 estaciones,incrementando la facturación y
                reduciendo los gastos operativos. Con su profundo conocimiento
                del negocio, ha dirigido y operado todo tipo de servicios, desde
                atención a clientes y ventas, hasta soporte tecnico de alto
                nivel.
              </p>
            </Zoom>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
