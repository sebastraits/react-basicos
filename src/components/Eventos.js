import React, { Component } from "react";
import Componente from "./Componente";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1
    });
  }

  restar() {
    console.log("restar");
    this.setState({
        contador: this.state.contador -1 
      });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export class EventosES7 extends Component {
   
      state = {
        contador: 0,
      };
  
      
    sumar = (e) => {
      console.log("sumando");
      this.setState({
        contador: this.state.contador + 1
      });
    }
  
    restar = (e) => {
      console.log("restar");
      this.setState({
          contador: this.state.contador -1 
        });
    }
  
    render() {
      return (
        <div>
          <h2>Eventos en componentes de clase ES7</h2>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
        </div>
      );
    }
  }


  function Boton(props){
    return <button onClick={props.MyOnClick}>Boton componente</button>

  }

  export class MasSobreEventos extends Component {

    handleClick = (e, message) => {
console.log(e, message)
    }

      render(){
          return(
              <div>
              <h2>Mas Sobre Eventos</h2>
              <button onClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}>Saludar</button>

              <Boton MyOnClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}>Saludar</Boton>
          </div>
          )
          
      }
  }