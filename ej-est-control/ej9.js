import React, { useState } from "react";

const SalarioSemanal = () => {
  const [horas, setHoras] = useState("");
  const [salario, setSalario] = useState(null);

  const calcularSalario = () => {
    const h = parseFloat(horas);
    if (isNaN(h) || h < 0) {
      alert("Ingresa un número de horas válido");
      return;
    }

    const pagoNormal = 50;
    const pagoExtra = 70;
    let total = 0;

    if (h <= 40) {
      total = h * pagoNormal;
    } else {
      total = 40 * pagoNormal + (h - 40) * pagoExtra;
    }

    setSalario(total.toFixed(2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calculadora de salario semanal</h2>
      <input
        type="number"
        placeholder="Horas trabajadas"
        value={horas}
        onChange={(e) => setHoras(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button onClick={calcularSalario} style={{ marginTop: "10px" }}>
        Calcular salario
      </button>
      {salario !== null && <p>El salario semanal es: ${salario}</p>}
    </div>
  );
};

export default SalarioSemanal;
