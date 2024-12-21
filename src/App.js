import { useState } from "react";
import { v4 as uuid } from "uuid"; /**crea id unicos */
import './App.css';
import Header from './componentes/Header/Header'; /*esta misma carpeta seria con ./ */
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "React Devs",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Ux y Diseño",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesis Rondon",
      puesto: "Desarrolladora de Softwre e Instructura",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructura en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "José Gonzalez",
      puesto: "Dev. FullStack",
      fav: false
    },
    {
      id: uuid(),
      equipo: "DevOps",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian",
      puesto: "Devs",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Móvil",
      foto: "https://github.com/christianpva.png",
      nombre: "Chris",
      puesto: "Instructor",
      fav: false
    }
  ]) // arreglo vacio o no

  //Lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //ternario --> condicion ? seMuestra : noSeMuestra
  //cortocircuito: condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log(colaborador)
    //Spread operator arreglo con 3 puntos es que estamos copiando algo, guardo en el arreglo los datos del formulario se anexan a lo que ya esta agregagdo
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    //recuerda que por defecto tiene un return: return colaborador.id !== id
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color

      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {

    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
  }
  //Actualizar equipo
  const actualizarEquipo = (datos, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.titulo = datos.titulo
        equipo.colorPrimario = datos.colorPrimario
        equipo.colorSecundario = datos.colorSecundario
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Ordenar Colaboradores por nombre

  return (
    <div>
      {/* {Header()} 
      <Header></Header> */}
      {/* de cualquier forma funciona */}
      <Header />
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {/* {mostrarFormulario === true ? <Formulario /> : <div></div>} */}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)

      }

      <Footer />

    </div>
  );
}

export default App;
