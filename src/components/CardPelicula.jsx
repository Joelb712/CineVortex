import React from "react";

function CardPelicula({ pelicula }) {
  return (
    <div style={{
      background:"#14001e",
      border:"1px solid #5a0087",
      borderRadius:"10px",
      padding:"10px",
      marginBottom:"15px"
    }}>
      <img src={pelicula.poster} alt={pelicula.titulo} style={{width:"100%",borderRadius:"8px"}} />
      <h3 style={{color:"white", marginTop:"10px"}}>{pelicula.titulo}</h3>
      <p style={{color:"#b893ff"}}>{pelicula.categoria}</p>
    </div>
  )
}

export default CardPelicula;
