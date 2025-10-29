import React, { useState } from "react";

const PreguntarContinuar = () => {
  const [mensaje, setMensaje] = useState("");

  const preguntar = () => {
    let respuesta = "";
    do {
      respuesta = prompt("¿Desea continuar? S/N").toUpperCase();
    } while (respuesta !== "N");

    setMensaje("Has decidido no continuar.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Pregunta de continuar</h2>
      <button onClick={preguntar} style={{ marginTop: "10px" }}>
        Iniciar pregunta
      </button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PreguntarContinuar;
