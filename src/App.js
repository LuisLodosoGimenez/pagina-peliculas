import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([])

  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">
            {/*Aquí va el listado de películas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}></Buscador>

            <Crear setListadoState={setListadoState}></Crear>
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            <div>
                &copy; Página Películas
            </div>   
            <a href="https://github.com/LuisLodosoGimenez"> github.com/LuisLodosoGimenez</a>
        </footer>

    </div>
  );
}

export default App;
