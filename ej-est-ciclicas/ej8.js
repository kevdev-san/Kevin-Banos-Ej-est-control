import React, { useState } from "react";

const TablaMultiplicar = () => {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const n = parseInt(numero, 10);
    if (isNaN(n)) {
      alert("Ingresa un número válido");
      return;
    }

    const resultado = [];
    for (let i = 1; i <= 10; i++) {
      resultado.push(`${n} x ${i} = ${n * i}`);
    }
    setTabla(resultado);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Tabla de multiplicar</h2>
      <input
        type="number"
        placeholder="Ingresa un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        style={{ margin: "5px" }}
      />
      <br />
      <button onClick={generarTabla} style={{ marginTop: "10px" }}>
        Generar tabla
      </button>
      {tabla.length > 0 &&
        tabla.map((item, idx) => <p key={idx}>{item}</p>)
      }
    </div>
  );
};

export default TablaMultiplicar;
