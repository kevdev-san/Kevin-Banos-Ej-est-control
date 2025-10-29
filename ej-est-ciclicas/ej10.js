import React, { useState } from "react";

const SumaCuadrados = () => {
  const [suma, setSuma] = useState(null);

  const calcularSuma = () => {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
      total += i * i;
    }
    setSuma(total);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Suma de los cuadrados del 1 al 100</h2>
      <button onClick={calcularSuma} style={{ marginTop: "10px" }}>
        Calcular suma
      </button>
      {suma !== null && <p>La suma de los cuadrados es: {suma}</p>}
    </div>
  );
};

export default SumaCuadrados;
