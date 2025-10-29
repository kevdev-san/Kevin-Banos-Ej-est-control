import React, { useState } from "react";

const CostoLapices = () => {
  const [cantidad, setCantidad] = useState("");
  const [costoTotal, setCostoTotal] = useState(null);

  const calcularCosto = () => {
    const cant = parseInt(cantidad, 10);
    if (isNaN(cant) || cant <= 0) {
      alert("Ingresa una cantidad válida");
      return;
    }

    let precioUnitario = 0;

    if (cant >= 100) {
      precioUnitario = 0.80;
    } else if (cant > 50) {
      precioUnitario = 1.20;
    } else if (cant >= 30) {
      precioUnitario = 1.50;
    } else {
      precioUnitario = 2.10;
    }

    setCostoTotal((cant * precioUnitario).toFixed(2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Costo de los lápices de colores</h2>
      <input
        type="number"
        placeholder="Cantidad de lápices"
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

export default CostoLapices;
