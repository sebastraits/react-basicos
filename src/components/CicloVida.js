import { render } from "@testing-library/react";
import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>{this.props.Hora}</h3>;
  }
  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, aun no esta en el DOM");

    this.state = {
      Hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    // console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(PrevProps, prevState) {
    // console.log(2, "El estado o las props del componente han cambiado");
    // console.log(PrevProps);
    // console.log(prevState);
  }

  Iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        Hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  render() {
    // console.log(
    //   4,
    //   "El componente se dibuja o redibuja por algun cambio en el DOM"
    // );
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {this.state.visible ? <Reloj Hora={this.state.Hora}></Reloj> : ""}

        <button onClick={this.Iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
