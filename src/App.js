import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente.js";
import "./App.css";
import Propiedades from "./components/Propiedades.js";
import Estado from "./components/Estado.js";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola, soy un Componente" />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Sebastian", apellido: "Nieto" }}
            elementoReact={<i>Esto es un elemento React</i>}
            funcion={(num) => num * num}
            componenteReact={
              <Componente msg="Componente de React"></Componente>
            }
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos></RenderizadoElementos>
          <hr/>
          <EventosES6></EventosES6>
          <EventosES7></EventosES7>
          <MasSobreEventos/>
          <Padre></Padre>
          <CicloVida></CicloVida>
          <AjaxApis></AjaxApis>
          <ContadorHooks titulo="Seguidores"></ContadorHooks>
          <ScrollHooks/>
          <RelojHooks/>
          <AjaxHooks/>
          <HooksPersonalizados/>
          <Referencias></Referencias>
          <Formularios/>
          <Estilos/>
        </section>
      </header>
    </div>
  );
}

export default App;
