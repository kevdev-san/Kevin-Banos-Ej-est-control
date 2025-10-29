import React, { useState } from "react";

const CalificacionesRango = () => {
  const [calificaciones, setCalificaciones] = useState([]);
  const [resultado, setResultado] = useState([]);

  const pedirCalificaciones = () => {
    const todas = [];
    let i = 1;

    while (i <= 10) {
      let cal = parseFloat(prompt(`Ingrese calificación ${i} (6 a 10):`));
      if (!isNaN(cal) && cal >= 6 && cal <= 10) {
        todas.push(cal);
        i++;
      } else {
        alert("Calificación inválida. Debe estar entre 6 y 10.");
      }
    }

    setCalificaciones(todas);
    setResultado(todas.map((c, idx) => `Calificación ${idx + 1}: ${c}`));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calificaciones válidas (6 a 10)</h2>
      <button onClick={pedirCalificaciones} style={{ marginTop: "10px" }}>
        Ingresar calificaciones
      </button>
      {resultado.length > 0 &&
        resultado.map((res, idx) => <p key={idx}>{res}</p>)
      }
    </div>
  );
};

export default CalificacionesRango;
 