import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    const [valor, actualizarValor] = useState();
    console.log("Datos: ", props.titulo);
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const { type = "text" } = props //asi por defecto el input sera text a menos que dentro ddel input digan lo contrario

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
       // props.onChange(e.target.value)
    }

    return <div className = { `campo campo-${type}` }>
        {/* <label>{props.titulo.toUpperCase()}</label> */}
        <label>{props.titulo}</label>
        <input 
            placeholder = {placeholderModificado} 
            required = {props.required} 
            value={valor}
            onChange={manejarCambio}
            type={ type }
        />

    </div>
}

export default Campo