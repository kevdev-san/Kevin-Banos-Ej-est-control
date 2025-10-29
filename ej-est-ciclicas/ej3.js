import React, { useState } from "react";

const ValidarCalificacion = () => {
  const [calificacion, setCalificacion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const pedirCalificacion = () => {
    let cal = parseFloat(calificacion);

    while (isNaN(cal) || cal < 0 || cal > 10) {
      cal = parseFloat(prompt("Ingresa una calificación válida (0 a 10):"));
    }

    setMensaje(`La calificación ingresada es: ${cal}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Validación de calificación</h2>
      <input
        type="number"
        placeholder="Ingresa una calificación"
        value={calificacion}
        onChange={(e) => setCalificacion(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button onClick={pedirCalificacion} style={{ marginTop: "10px" }}>
        Validar
      </button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default ValidarCalificacion;
