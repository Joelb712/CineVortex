import React from "react";

function Cartelera({ peliculas }) {

  
  const peliculas2025 = peliculas.filter(p => p.año === 2025);

  
  const peliculasRandom = peliculas2025
    .sort(() => 0.5 - Math.random())
    .slice(0, 6); // toma 6 películas aleatorias

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "16px",
      marginTop: "20px"
    }}>
      {peliculasRandom.map((p) => (
        <div key={p.id} style={{
          background:"#14001e",
          borderRadius:"8px",
          overflow:"hidden",
          color:"#eee",
          boxShadow:"0 2px 8px rgba(0,0,0,0.6)"
        }}>
          <img 
            src={p.poster} 
            alt={p.titulo} 
            style={{width:"100%", height:"225px", objectFit:"cover"}}
          />
          <div style={{padding:"8px"}}>
            <h4 style={{margin:"0 0 4px 0", fontSize:"14px"}}>{p.titulo}</h4>
            <p style={{margin:0, fontSize:"12px", opacity:0.8}}>{p.categoria}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cartelera;
