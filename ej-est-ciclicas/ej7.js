import React, { useState } from "react";

const NumerosDeDiezEnDiez = () => {
  const [numeros, setNumeros] = useState([]);

  const generarNumeros = () => {
    const lista = [];
    for (let i = 10; i <= 100; i += 10) {
      lista.push(i);
    }
    setNumeros(lista);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Números del 0 al 100 de diez en diez</h2>
      <button onClick={generarNumeros} style={{ marginTop: "10px" }}>
        Generar números
      </button>
      {numeros.length > 0 && <p>{numeros.join(", ")}</p>}
    </div>
  );
};

export default NumerosDeDiezEnDiez;
