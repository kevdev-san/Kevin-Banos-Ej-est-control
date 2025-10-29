import React, { useState } from "react";

const CalificacionesAlumnos = () => {
  const [calificaciones, setCalificaciones] = useState([]);
  const [resultado, setResultado] = useState([]);

  const pedirCalificaciones = () => {
    const todas = [];
    for (let alumno = 1; alumno <= 5; alumno++) {
      const notas = [];
      for (let i = 1; i <= 3; i++) {
        let cal = parseFloat(prompt(`Alumno ${alumno}, calificación ${i}:`));
        while (isNaN(cal) || cal < 0 || cal > 10) {
          cal = parseFloat(prompt(`Ingrese una calificación válida (0-10) para Alumno ${alumno}, calificación ${i}:`));
        }
        notas.push(cal);
      }
      todas.push({ alumno, notas });
    }
    setCalificaciones(todas);

    const resumen = todas.map(a => `Alumno ${a.alumno}: ${a.notas.join(", ")}`);
    setResultado(resumen);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calificaciones de 5 alumnos</h2>
      <button onClick={pedirCalificaciones} style={{ marginTop: "10px" }}>
        Ingresar calificaciones
      </button>
      {resultado.length > 0 &&
        resultado.map((res, idx) => <p key={idx}>{res}</p>)
      }
    </div>
  );
};

export default CalificacionesAlumnos;
