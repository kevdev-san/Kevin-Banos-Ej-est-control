import React, { useState } from "react";

const CostoBalones = () => {
  const [cantidad, setCantidad] = useState("");
  const [costoTotal, setCostoTotal] = useState(null);

  const calcularCosto = () => {
    const cant = parseInt(cantidad, 10);
    if (isNaN(cant) || cant <= 0) {
      alert("Ingresa una cantidad válida");
      return;
    }

    let precioUnitario = 0;

    if (cant > 15) {
      precioUnitario = 85;
    } else if (cant > 10) {
      precioUnitario = 92;
    } else {
      precioUnitario = 99;
    }

    setCostoTotal(cant * precioUnitario);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Costo de los balones de fútbol</h2>
      <input
        type="number"
        placeholder="Cantidad de balones"
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

export default CostoBalones;
