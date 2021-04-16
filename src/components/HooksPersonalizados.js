import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";

  let {data, isPending, error} = useFetch(url);
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>{JSON.stringify(error)} </h3>
<pre style={{whiteSpace: "pre-wrap"}}> 
    <code>{JSON.stringify(data)} </code>
</pre>

     
    </>
  );
}
