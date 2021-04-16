import React, { useState } from "react";

export default function Formularios() {
//   const [nombre, setNombre] = useState("Escribe tu nombre");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);
const [form, setForm] = useState({});

const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value
    })
}

const handleChequed = (e) => {
    setForm({...form, [e.target.name]: e.target.checked
    })
}




  const handleSubmit = (e) => {
      e.preventDefault();
      alert("El formulario se envio")
  }

  return (
    <>
      <h2>Formularios</h2>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <p>Elige tu sabor helado favorito</p>
        <input
          type="radio"
          id="dulcedeleche"
          name="sabor"
          value="dulcedeleche"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="dulcedeleche">Dulce de leche</label>
        <input
          type="radio"
          id="limon"
          name="sabor"
          value="limon"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="limon">Limon</label>
        <input
          type="radio"
          id="naranja"
          name="sabor"
          value="naranja"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="naranja">Naranja</label>
        <input
          type="radio"
          id="chocolate"
          name="sabor"
          value="chocolate"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="chocolate">Chocolate</label>
        <input
          type="radio"
          id="frutilla"
          name="sabor"
          value="frutilla"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="frutilla">Frutilla</label>
        <p>Elige tu lenguaje de programacion</p>

        <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
          <option value="">---</option>
          <option value="visualnet">Visual Studio Net</option>
          <option value="java">Java</option>
          <option value="javascript">Javascript</option>
        </select>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" id="terminos" onChange={(e) => setTerminos(e.target.checked)}/>
        <input type="submit"/>
      </form> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        ></input>
        <p>Elige tu sabor helado favorito</p>
        <input
          type="radio"
          id="dulcedeleche"
          name="sabor"
          value="dulcedeleche"
          onChange={handleChange}
        />
        <label htmlFor="dulcedeleche">Dulce de leche</label>
        <input
          type="radio"
          id="limon"
          name="sabor"
          value="limon"
          onChange={handleChange}
        />
        <label htmlFor="limon">Limon</label>
        <input
          type="radio"
          id="naranja"
          name="sabor"
          value="naranja"
          onChange={handleChange}
        />
        <label htmlFor="naranja">Naranja</label>
        <input
          type="radio"
          id="chocolate"
          name="sabor"
          value="chocolate"
          onChange={handleChange}
        />
        <label htmlFor="chocolate">Chocolate</label>
        <input
          type="radio"
          id="frutilla"
          name="sabor"
          value="frutilla"
          onChange={handleChange}
        />
        <label htmlFor="frutilla">Frutilla</label>
        <p>Elige tu lenguaje de programacion</p>

        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="visualnet">Visual Studio Net</option>
          <option value="java">Java</option>
          <option value="javascript">Javascript</option>
        </select>
        <br/>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" id="terminos" onChange={handleChequed}/>
        <br></br>
        <input type="submit"/>
      </form>
    </>
  );
}
