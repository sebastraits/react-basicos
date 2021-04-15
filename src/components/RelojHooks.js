import React, { useState, useEffect } from "react";

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  const tictac = (visible) => {
    setVisible(visible);
  };

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      console.log("fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible ? <Reloj Hora={hora}></Reloj> : ""}

      <button onClick={() => tictac(true)}>Iniciar</button>
      <button onClick={() => tictac(false)}>Detener</button>
    </>
  );
}

function Reloj({ Hora }) {
  return <h3>{Hora}</h3>;
}
