import React from "react";

function Promociones() {
  const promociones = [
    {
      id: "entrada-miercoles",
      titulo: "Entrada General Miércoles",
      descripcion: "Entrada general al cine todos los miércoles a precio especial.",
    },
    {
      id: "combo-popcorn-soda",
      titulo: "Combo Popcorn + Gaseosa",
      descripcion: "Popcorn mediano + soda grande por un precio promocional.",
    },
    {
      id: "2x1-nachos-viernes",
      titulo: "2×1 Nachos Viernes",
      descripcion: "Por cada nachos estándar, el segundo gratis. Sólo los viernes.",
    },
    {
      id: "entrada-matine",
      titulo: "Entrada Matiné Sábados y Domingos",
      descripcion: "Entradas a precio reducido para funciones antes de las 17:00.",
    },
    {
      id: "combo-familia",
      titulo: "Combo Familia 4 Personas",
      descripcion: "4 entradas + 2 popcorns medianos + 4 sodas por un solo precio.",
    },
    {
      id: "descuento-estudiante",
      titulo: "Descuento Estudiante",
      descripcion: "Presentando carnet, entrada a precio reducido todos los días.",
    },
    {
      id: "domingo-retro",
      titulo: "Domingos Retro",
      descripcion: "Funciones + palomitas retro + gaseosa en oferta los domingos.",
    },
    {
      id: "combo-dulces-gaseosa",
      titulo: "Combo Dulces + Gaseosa",
      descripcion: "Paquete de golosinas + soda 500 ml por un precio especial.",
    },
    {
      id: "preventa-estreno",
      titulo: "Preventa Estreno",
      descripcion: "Entrada + bebida gratis para estrenos seleccionados.",
    },
    {
      id: "club-vortex-descuento",
      titulo: "Club Vortex – 10% Off",
      descripcion: "Hacete socio y recibí 10% de descuento en entradas y dulces.",
    }
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "20px"
    }}>
      {promociones.map(promo => (
        <div key={promo.id} style={{
          background: "#14001e",
          border: "1px solid #5a0087",
          borderRadius: "8px",
          overflow: "hidden",
          color: "#eee",
          boxShadow: "0 2px 8px rgba(0,0,0,0.6)"
        }}>
          <div style={{ padding: "12px" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{promo.titulo}</h3>
            <p style={{ margin: "0 0 12px 0", fontSize: "14px", opacity: 0.8 }}>
              {promo.descripcion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promociones;
