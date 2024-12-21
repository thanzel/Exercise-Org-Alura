import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
//https://github.com/christianpva.png
    //destructuramos
    const { nombre, puesto, foto, equipo, id, fav  } = props.datos //vienen de props ydentrode props datos y se asignan a esas variables nombre, puesto, etc
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
        <div className="encabezado" style={ { backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/> }
            
            
        </div>

    </div>
}

export default Colaborador