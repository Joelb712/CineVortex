import React from "react";
import "./FiltroCategorias.css";

const categorias = [
  "Todas",
  "Acción",
  "Comedia",
  "Terror",
  "Animación",
  "Drama",
  "Ciencia Ficción"
]

function FiltroCategorias({ categoriaSeleccionada, onChange }) {
  return (
    <div className="filtro-container">
      <select
        className="filtro-select"
        value={categoriaSeleccionada}
        onChange={(e) => onChange(e.target.value)}
      >
        {categorias.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )
}

export default FiltroCategorias;
