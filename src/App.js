import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente.js";
import './App.css';
import Propiedades from "./components/Propiedades.js"

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
        <Componente msg="Hola, soy un Componente"/>
        <Propiedades cadena="Esto es una cadena de texto" numero={19} booleano={true} arreglo={[1,2,3]} objeto={{nombre: "Sebastian", apellido: "Nieto"}} elementoReact={<i>Esto es un elemento React</i>} funcion={(num) => (num*num)} componenteReact={<Componente msg="Componente de React"></Componente>} />
              </section>
        
      </header>
      
    </div>
  );
}

export default App;
