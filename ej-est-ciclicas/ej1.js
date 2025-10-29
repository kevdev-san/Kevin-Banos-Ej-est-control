import React, { useState } from "react";

const NumerosAntes = () => {
  const [numero, setNumero] = useState("");
  const [lista, setLista] = useState([]);

  const mostrarNumeros = () => {
    const n = parseInt(numero, 10);
    if (isNaN(n) || n <= 0) {
      alert("Ingresa un número válido mayor que 0");
      return;
    }

    const numerosAntes = [];
    for (let i = 1; i < n; i++) {
      numerosAntes.push(i);
    }

    setLista(numerosAntes);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Números antes del ingresado</h2>
      <input
        type="number"
        placeholder="Ingresa un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button onClick={mostrarNumeros} style={{ marginTop: "10px" }}>
        Mostrar números
      </button>
      {lista.length > 0 && <p>{lista.join(", ")}</p>}
    </div>
  );
};

export default NumerosAntes;
