import React from "react";
import { useParams } from "react-router-dom";
import { peliculasData } from "./Peliculas";
import "./PeliculaDetalle.css";

function PeliculaDetalle() {
  const { id } = useParams();
  const pelicula = peliculasData.find(p => p.id.toString() === id);

  if(!pelicula) return <h1>Pelicula no encontrada</h1>;

  return (
    <div className="detalle-container">
      <img src={pelicula.poster} alt={pelicula.titulo} className="poster-detalle" />

      <div className="detalle-info">
        <h1>{pelicula.titulo}</h1>
        <p><strong>Año:</strong> {pelicula.año}</p>
        <p><strong>Género:</strong> {pelicula.categoria}</p>
        <p><strong>Descripción:</strong> {pelicula.descripcion}</p>
      </div>
    </div>
  );
}

export default PeliculaDetalle;
