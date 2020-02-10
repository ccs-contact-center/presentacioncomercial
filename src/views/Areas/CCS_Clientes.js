import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";

import { Avatar } from "@material-ui/core";

import i1 from "../../assets/img/clientes_ccs/ace_seguros.png";
import i2 from "../../assets/img/clientes_ccs/ado.png";
import i3 from "../../assets/img/clientes_ccs/aig.png";
import i4 from "../../assets/img/clientes_ccs/amex.png";
import i5 from "../../assets/img/clientes_ccs/banco_azteca.png";
import i6 from "../../assets/img/clientes_ccs/banregio.png";
import i7 from "../../assets/img/clientes_ccs/caminante.png";
import i8 from "../../assets/img/clientes_ccs/canal_once.png";
import i9 from "../../assets/img/clientes_ccs/cv_directo.png";
import i10 from "../../assets/img/clientes_ccs/dominos.png";
import i11 from "../../assets/img/clientes_ccs/el_universal.png";
import i12 from "../../assets/img/clientes_ccs/elektra.png";
import i13 from "../../assets/img/clientes_ccs/enel.png";
import i14 from "../../assets/img/clientes_ccs/gandhi.png";
import i15 from "../../assets/img/clientes_ccs/harmon_hall.png";
import i16 from "../../assets/img/clientes_ccs/huawei.png";
import i17 from "../../assets/img/clientes_ccs/ilusion.png";
import i18 from "../../assets/img/clientes_ccs/inea.png";
import i19 from "../../assets/img/clientes_ccs/inova.png";
import i20 from "../../assets/img/clientes_ccs/interjet.png";
import i21 from "../../assets/img/clientes_ccs/interlingua.png";
import i22 from "../../assets/img/clientes_ccs/ixe.png";
import i23 from "../../assets/img/clientes_ccs/mens_fashion.png";
import i24 from "../../assets/img/clientes_ccs/mercees_benz.png";
import i25 from "../../assets/img/clientes_ccs/microsoft.png";
import i26 from "../../assets/img/clientes_ccs/oxxo.png";
import i27 from "../../assets/img/clientes_ccs/price_shoes.png";
import i28 from "../../assets/img/clientes_ccs/reforma.png";
import i29 from "../../assets/img/clientes_ccs/seguros_monterrey.png";
import i30 from "../../assets/img/clientes_ccs/sin_delantal.png";
import i31 from "../../assets/img/clientes_ccs/soriana.png";
import i32 from "../../assets/img/clientes_ccs/sura.png";
import i33 from "../../assets/img/clientes_ccs/tcl.png";
import i34 from "../../assets/img/clientes_ccs/televia.png";
import i35 from "../../assets/img/clientes_ccs/televisa.png";
import i36 from "../../assets/img/clientes_ccs/unitec.png";
import i37 from "../../assets/img/clientes_ccs/verde.png";
import i38 from "../../assets/img/clientes_ccs/vips.png";

import Bounce from "react-reveal/Bounce";

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="content">
          <Bounce>
            <h1>Clientes</h1>
          </Bounce>
          <Bounce left cascade duration={1000}>
            <div className="horizontalContent">
              <Avatar src={i1} className="avatarClientsS" />
              <Avatar src={i2} className="avatarClientsL" />
              <Avatar src={i3} className="avatarClientsS" />
              <Avatar src={i4} className="avatarClientsS" />
              <Avatar src={i5} className="avatarClientsM" />
              <Avatar src={i6} className="avatarClientsS" />
            </div>
          </Bounce>
          <Bounce up cascade duration={1000}>
            <div className="horizontalContent">
              <Avatar src={i7} className="avatarClientsS" />
              <Avatar src={i8} className="avatarClientsL" />
              <Avatar src={i9} className="avatarClientsS" />
              <Avatar src={i10} className="avatarClientsS" />
            </div>
          </Bounce>
          <Bounce right cascade duration={1000}>
            <div className="horizontalContent">
              <Avatar src={i11} className="avatarClientsS" />
              <Avatar src={i12} className="avatarClientsM" />
              <Avatar src={i13} className="avatarClientsS" />
              <Avatar src={i14} className="avatarClientsL" />
              <Avatar src={i15} className="avatarClientsM" />
              <Avatar src={i16} className="avatarClientsS" />
              <Avatar src={i17} className="avatarClientsS" />
            </div>
          </Bounce>
          <Bounce down cascade duration={1000}>
            <div className="horizontalContent">
              <Avatar src={i18} className="avatarClientsM" />
              <Avatar src={i19} className="avatarClientsS" />
              <Avatar src={i20} className="avatarClientsS" />
              <Avatar src={i21} className="avatarClientsM" />
              <Avatar src={i22} className="avatarClientsL" />
              <Avatar src={i23} className="avatarClientsS" />
            </div>
          </Bounce>
          <Bounce up cascade duration={1000}>
            <div className="horizontalContent">
              <Avatar src={i24} className="avatarClientsS" />
              <Avatar src={i25} className="avatarClientsM" />
              <Avatar src={i26} className="avatarClientsS" />
              <Avatar src={i27} className="avatarClientsM" />
              <Avatar src={i28} className="avatarClientsS" />
              <Avatar src={i29} className="avatarClientsL" />
              <Avatar src={i30} className="avatarClientsS" />
            </div>
          </Bounce>
          <Bounce left cascade duration={1000}>
            <div className="horizontalContent">
              <Avatar src={i31} className="avatarClientsS" />
              <Avatar src={i32} className="avatarClientsM" />
              <Avatar src={i33} className="avatarClientsS" />
              <Avatar src={i34} className="avatarClientsS" />
              <Avatar src={i35} className="avatarClientsM" />
              <Avatar src={i36} className="avatarClientsS" />
              <Avatar src={i37} className="avatarClientsS" />
              <Avatar src={i38} className="avatarClientsS" />
            </div>
          </Bounce>
        </div>
      </div>
    );
  }
}

export default Comercial;
