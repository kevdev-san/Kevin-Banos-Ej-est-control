import React, { useState } from "react";

const MayorDeDos = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [mayor, setMayor] = useState(null);

  const calcularMayor = () => {
    const n1 = parseInt(num1, 10);
    const n2 = parseInt(num2, 10);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Por favor ingresa números válidos");
      return;
    }

    setMayor(n1 > n2 ? n1 : n2);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Mayor de dos números</h2>
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
      <button onClick={calcularMayor} style={{ marginTop: "10px" }}>
        Calcular mayor
      </button>
      {mayor !== null && <p>El número mayor es: {mayor}</p>}
    </div>
  );
};

export default MayorDeDos;
