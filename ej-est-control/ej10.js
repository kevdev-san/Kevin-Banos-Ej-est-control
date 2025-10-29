import React, { useState } from "react";

const MenorDeDos = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [menor, setMenor] = useState(null);

  const calcularMenor = () => {
    const n1 = parseInt(num1, 10);
    const n2 = parseInt(num2, 10);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Por favor ingresa números válidos");
      return;
    }

    setMenor(n1 < n2 ? n1 : n2);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Menor de dos números</h2>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button onClick={calcularMenor} style={{ marginTop: "10px" }}>
        Calcular menor
      </button>
      {menor !== null && <p>El número menor es: {menor}</p>}
    </div>
  );
};

export default MenorDeDos;
