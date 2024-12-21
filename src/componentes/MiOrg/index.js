import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
  //  const[mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    // //estado hooks : estado: useState
    // //const [nombreVariable, funcionActualizar] = useState(valorInicial)
    // //const [nombre, actualizarNombre] = useState("yenny")
    
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title"> Mi Organización <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/></h3>
        
        {/* <img src="/img/add.png" alt="add" onClick={{manejarClick} />  */}
    </section>
}

export default MiOrg