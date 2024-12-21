import { useState } from "react"
import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba' ;  

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos//asigno a esas variables
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    return <>{ colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                 type='color'
                 className="input-color"
                 value={hexToRgba(colorPrimario, 0.6)}
                 onChange={(evento) => {
                    //con el onchange se quita el warning, ára nosotros tener el control
                    actualizarColor(evento.target.value, id) 
                }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>

                {/* <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3> */}
                {/* <h3 style={{ borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3> */}
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={ colorPrimario} 
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }

                </div>
            </section>
    }</>
}

export default Equipo