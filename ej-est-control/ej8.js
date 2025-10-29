import React, { useState } from "react";

const CostoBatesDiferenciado = () => {
  const [cantidad, setCantidad] = useState("");
  const [costoTotal, setCostoTotal] = useState(null);

  const calcularCosto = () => {
    const cant = parseInt(cantidad, 10);
    if (isNaN(cant) || cant <= 0) {
      alert("Ingresa una cantidad válida");
      return;
    }

    let total = 0;
    const precioPrim10 = 250;
    const precioRestantes = 230;

    if (cant <= 10) {
      total = cant * precioPrim10;
    } else {
      total = 10 * precioPrim10 + (cant - 10) * precioRestantes;
    }

    setCostoTotal(total);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Costo de bates de béisbol</h2>
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
      {costoTotal !== null && <p>Cantidad: {cantidad} | Costo total: ${costoTotal}</p>}
    </div>
  );
};

export default CostoBatesDiferenciado;
