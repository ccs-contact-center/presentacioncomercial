import React, { Component } from 'react'
import '../../index.css'
import 'react-circular-progressbar/dist/styles.css'

import Zoom from 'react-reveal/Zoom'
import avant from '../../assets/img/brand/avant.png'
import seac from '../../assets/img/brand/seac.png'
import sim from '../../assets/img/brand/sim.png'
import ccs from '../../assets/img/brand/ccs.png'

import { Avatar, Grid } from '@material-ui/core'

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content" style={{ padding: '20px' }}>
          <div className="slide">
            <Grid container className="centrado-fila">
              <Grid item xs={12}>
                <Zoom>
                  <h1>Empresas del Grupo</h1>
                </Zoom>
                <Zoom cascade>
                  <div className="horizontalContent">
                    <div className="avatarcontent">
                      <Avatar
                        style={{ cursor: 'pointer' }}
                        alt="Outsourcing"
                        src={avant}
                        className="avatarSE"
                        onClick={() => (window.location.href = '/#SimBrands/1')}
                      />
                      <p>Avant</p>
                    </div>
                    <div className="avatarcontent">
                      <Avatar
                        style={{ cursor: 'pointer' }}
                        alt="Cosourcing"
                        src={sim}
                        className="avatarSE"
                        onClick={() => (window.location.href = '/#SimBrands/2')}
                      />
                      <p>SEAC</p>
                    </div>
                  </div>
                </Zoom>
                <Zoom cascade>
                  <div className="horizontalContent">
                    <div className="avatarcontent">
                      <Avatar
                        style={{ cursor: 'pointer' }}
                        alt="Calidad"
                        src={seac}
                        className="avatarSE"
                        onClick={() => (window.location.href = '/#SimBrands/3')}
                      />
                      <p>Sim Tecnología</p>
                    </div>
                    <div className="avatarcontent">
                      <Avatar
                        style={{ cursor: 'pointer' }}
                        alt="Capacitación"
                        src={ccs}
                        className="avatarSE"
                        onClick={() => (window.location.href = '/#CCS')}
                      />
                      <p>CCS</p>
                    </div>
                  </div>
                </Zoom>
              </Grid>
            </Grid>
          </div>

          <div className="slide">
            <Avatar
              alt="Outsourcing"
              src={avant}
              className="avatarSE"
              style={{ marginLeft: '30vw' }}
            />
            {/*<img
              src={avant}
              width={220}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
            
                marginTop: "-3vw"
              }}
            />*/}
            <br />
            <p>
              Avant es una empresa 100% mexicana cuyo objetivo es apoyar el
              desarrollo y consolidación del capital de trabajo de las Pequeñas
              y Medianas Empresas (PYMES), ofreciendo diversas fuentes de
              financiamiento.
            </p>
            <p>
              La gama de productos ofrecidos son coadyuvantes para el desarrollo
              de las PYMES, para hacer frente a sus necesidades de liquidez y
              capital de trabajo, para adquirir activos fijos o bien para
              soportar los plazos de crédito de sus clientes. Los productos son
              ofrecidos bajo condiciones y costos muy competitivos en el mercado
              de dinero, siendo los siguientes:
            </p>
            <br />
            <ul>
              <li>Líneas de crédito simple y revolvente</li>
              <li>Arrendamiento puro y financiero</li>
              <li>Factoraje financiero</li>
            </ul>
          </div>
          <div className="slide">
            <Avatar
              alt="Outsourcing"
              src={sim}
              className="avatarSE"
              style={{ marginLeft: '30vw' }}
            />
            {/*<img
              src={sim}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                marginBottom: "-5vw"
              }}
            />*/}
            <br />
            <p>
              SEAC fue creada en el año 2004, dedicado a ofrecer servicios
              intensivos en mano de obra, ofreciendo soluciones integrales en
              recursos humanos otorgando garantías, reduciendo costos de manera
              tangible y mejorando la calidad y transparencia de los mismos.
            </p>
            <p>Los principales servicios proporcionados son:</p>
            <br />
            <br />
            <ul>
              <li>Administración de nómina.</li>
              <li>Maquila de nómina</li>
              <li>Consultoría en RH.</li>
              <li>Reclutamiento y selección.</li>
            </ul>
          </div>
          <div className="slide">
            <Avatar
              alt="Outsourcing"
              src={seac}
              className="avatarSE"
              style={{ marginLeft: '30vw' }}
            />
            {/*<img
              src={seac}
              width={300}
              alt="logo"
              className="img-fluid"
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
                marginBottom: "-5vw",
                marginTop: "-3vw"
              }}
            />*/}
            <br />
            <p>
              En 2012 Grupo SIM crea la división de tecnología, empresa
              especializada en la reparación, logística y comercialización de
              productos y servicios relacionados a telecomunicaciones, cómputo y
              electrónicos con cobertura a nivel nacional y proyección
              Internacional.
            </p>
            <p>
              Actualmente cuenta con + de 500 colaboradores, ingresos por MXN
              400 millones y presta servicios al 80% de las marcas de celulares
              del mercado Mexicano
            </p>

            <p>Nuestros priincipales clientes son:</p>

            <ul>
              <li>Samsung</li>
              <li>Apple</li>
              <li>Huawei</li>
              <li>Motorola</li>
              <li>Hisense</li>
              <li>Alcatel</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comercial
