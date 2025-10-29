import React, { useState } from "react";

const NumerosPares = () => {
  const [pares, setPares] = useState([]);

  const generarPares = () => {
    const lista = [];
    for (let i = 2; i <= 15; i += 2) {
      lista.push(i);
    }
    setPares(lista);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Números pares del 2 al 15</h2>
      <button onClick={generarPares} style={{ marginTop: "10px" }}>
        Mostrar pares
      </button>
      {pares.length > 0 && <p>{pares.join(", ")}</p>}
    </div>
  );
};

export default NumerosPares;
