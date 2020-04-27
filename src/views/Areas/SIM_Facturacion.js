import React, { Component } from 'react'
import '../../index.css'
import 'react-circular-progressbar/dist/styles.css'

import Zoom from 'react-reveal/Zoom'
import money from '../../assets/img/icons/money.png'
import people from '../../assets/img/icons/people.png'
import deloitte from '../../assets/img/partners/deloitte.png'

class Comercial extends Component {
  render() {
    return (
      <div className="section" id="implementacion">
        <div className="content" style={{ padding: '20px' }}>
          <div className="centrado-fila">
            <div>
              <h1>Datos Financieros</h1>

              <p style={{ margin: '-1vw' }}>
                Durante los últimos 9 años, Grupo SIM ha logrado crecimientos de
                doble digito tanto en ingresos como en nómina mensual procesada
              </p>
              <div className="info-box" style={{marginTop:'10px'}}>
                <Zoom down delay={750}>
                  <div className="info-item" style={{marginBottom:'0px' }}>
                    <h2>Nómina Procesada Mensualmente</h2>
                  </div>
                </Zoom>
                <Zoom left>
                  <div className="info-item" style={{marginBottom:'0px' }}>
                    <h2>Ingreso Anual</h2>
                  </div>
                </Zoom>
                <Zoom rigth delay={500}>
                  <div className="info-item" style={{marginBottom:'3px' }}>
                    <img
                      src={people}
                      width={300}
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                </Zoom>
                <Zoom up delay={250}>
                  <div className="info-item" style={{marginBottom:'3px' }}>
                    <img
                      src={money}
                      width={300}
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                </Zoom>
              </div>

              <Zoom>
                <p style={{marginBottom:'0px' }}>Estados financieros auditados por:</p>
                <img
                  src={deloitte}
                  width={220}
                  alt="logo"
                  className="img-fluid"
                 
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comercial
