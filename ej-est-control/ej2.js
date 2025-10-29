import React, { useState } from "react";

const SalarioNeto = () => {
  const [salario, setSalario] = useState(null);

  const calcularSalario = () => {
    const horasPorDia = 8;
    const diasQuincena = 15; // asumimos quincena de 15 días
    const pagoHora = 50;

    // Salario bruto
    const salarioBruto = horasPorDia * diasQuincena * pagoHora;

    // Compensación y descuentos
    const compensacion = salarioBruto * 0.02; // 2%
    const descuentoIMSS = salarioBruto * 0.015; // 1.5%
    const descuentoISPT = salarioBruto * 0.012; // 1.2%

    // Salario neto
    const neto = salarioBruto + compensacion - descuentoIMSS - descuentoISPT;

    setSalario(neto.toFixed(2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calculadora de salario neto</h2>
      <button onClick={calcularSalario}>Calcular salario</button>
      {salario && <p>El salario neto es: ${salario}</p>}
    </div>
  );
};

export default SalarioNeto;
