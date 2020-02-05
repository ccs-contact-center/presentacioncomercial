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
      <div className="section">
        <div className="content">
          <div className="slide">
            <Zoom>
              <h1>Socios</h1>
            </Zoom>
            <br />
            <br />
            <Zoom cascade>
              <div className="horizontalContent">
                <div className="avatarcontent">
                  <Avatar
                    alt="Jeronimo Fernandez"
                    src={avatar1}
                    className="avatar"
                    onClick={() => alert("Test")}
                  />
                  <p>John Doe</p>
                  <p>Dirección General</p>
                </div>
                <div className="avatarcontent">
                  <Avatar alt="Vivian Cheja" src={avatar2} className="avatar" />
                  <p>John Doe</p>
                  <p>Dirección General</p>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="slide">
            <Zoom left>
              <Avatar className="avatarBig" alt="" src={avatar1} />
            </Zoom>
            <br />
            <Zoom up>
              <h2>John Doe</h2>
              <h3>Director General</h3>
            </Zoom>
            <br />
            <Zoom right>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                sint blanditiis exercitationem suscipit doloremque labore
                aliquid magnam quod, dolorem, ratione libero, qui aspernatur
                quia? Odit, quidem. Veritatis, deserunt. Assumenda, a!
              </p>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
