import React from "react";

function Horarios() {

  const horariosSemana = [
    { dias: "Lunes a Jueves", primerFuncion: "15:00", ultimaFuncion: "21:00" },
    { dias: "Viernes a Domingo", primerFuncion: "09:00", ultimaFuncion: "23:00" }
  ];

  return (
    <div style={{display:"flex", gap:"20px", flexWrap:"wrap", marginTop:"20px"}}>
      {horariosSemana.map((h, idx) => (
        <div key={idx} style={{
          flex:"1 1 250px",
          padding:"20px",
          background:"#14001e",
          borderRadius:"8px",
          textAlign:"center",
          boxShadow:"0 2px 10px rgba(0,0,0,0.6)"
        }}>
          <h3 style={{margin:"0 0 10px 0"}}>{h.dias}</h3>
          <p style={{margin:"0", fontSize:"14px", opacity:0.8}}>
            Primera función: {h.primerFuncion}
          </p>
          <p style={{margin:"0", fontSize:"14px", opacity:0.8}}>
            Última función: {h.ultimaFuncion}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Horarios;
