import React, { useState } from "react";

const MaximoCincoNumeros = () => {
  const [numeros, setNumeros] = useState(["", "", "", "", ""]);
  const [maximo, setMaximo] = useState(null);

  const handleChange = (index, value) => {
    const nuevosNumeros = [...numeros];
    nuevosNumeros[index] = value;
    setNumeros(nuevosNumeros);
  };

  const calcularMaximo = () => {
    const nums = numeros.map(Number); // Convertimos los valores a números
    const max = Math.max(...nums);
    setMaximo(max);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Encuentra el número máximo</h2>
      {numeros.map((num, index) => (
        <input
          key={index}
          type="number"
          value={num}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Número ${index + 1}`}
          style={{ margin: "5px" }}
        />
      ))}
      <br />
      <button onClick={calcularMaximo} style={{ marginTop: "10px" }}>
        Calcular máximo
      </button>
      {maximo !== null && <p>El número máximo es: {maximo}</p>}
    </div>
  );
};

export default MaximoCincoNumeros;
