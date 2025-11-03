import React from "react";
import "./Buscador.css";

function Buscador({ valor, onChange }) {
  return (
    <div className="buscador-container">
      <input
        className="buscador-input"
        type="text"
        placeholder="Buscar película..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Buscador;
