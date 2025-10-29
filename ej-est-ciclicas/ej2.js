import React, { useState } from "react";

const NumerosConSaltos = () => {
  const [resultado, setResultado] = useState("");

  const generarNumeros = () => {
    let texto = "";
    for (let i = 1; i <= 30; i++) {
      texto += i + " ";
      if (i % 7 === 0) {
        texto += "\n";
      }
    }
    setResultado(texto);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", whiteSpace: "pre-line" }}>
      <h2>Números del 1 al 30 con salto cada 7</h2>
      <button onClick={generarNumeros} style={{ marginTop: "10px" }}>
        Generar números
      </button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default NumerosConSaltos;
