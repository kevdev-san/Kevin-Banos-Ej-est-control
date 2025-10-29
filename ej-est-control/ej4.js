import React, { useState } from "react";

const CostoBates = () => {
  const [cantidad, setCantidad] = useState("");
  const [costoTotal, setCostoTotal] = useState(null);

  const calcularCosto = () => {
    const cant = parseInt(cantidad, 10);
    if (isNaN(cant) || cant <= 0) {
      alert("Ingresa una cantidad válida");
      return;
    }

    const precioUnitario = cant >= 10 ? 100 : 108;
    const total = cant * precioUnitario;
    setCostoTotal(total);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Costo de los bates de béisbol</h2>
      <input
        type="number"
        placeholder="Cantidad de bates"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button onClick={calcularCosto} style={{ marginTop: "10px" }}>
        Calcular costo
      </button>
      {costoTotal !== null && <p>El costo total es: ${costoTotal}</p>}
    </div>
  );
};

export default CostoBates;
