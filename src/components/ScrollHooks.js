import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  const detectarScroll = () => {
    setScrollY(window.pageYOffset);
  };
  window.addEventListener("scroll", detectarScroll);



  useEffect(() => {
    // console.log("Moviendo el scroll");
  }, [scrollY]);

  useEffect(() => {
    // console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    // console.log("Fase de actualizacion");
  });

  useEffect(() => {
    return () => {
    //   console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - UseEffect y el ciclo de vida</h2>
      <p>Scroll Y del Navegador {scrollY}</p>
    </>
  );
}
