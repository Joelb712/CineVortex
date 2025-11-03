import React from "react";

function Promociones() {
  const promociones = [
    {
      id: "entrada-miercoles",
      titulo: "Entrada General Miércoles",
      descripcion: "Entrada general al cine todos los miércoles a precio especial.",
      imagen: "https://via.placeholder.com/300x200.png?text=Entrada+Mi%C3%A9rcoles"
    },
    {
      id: "combo-popcorn-soda",
      titulo: "Combo Popcorn + Gaseosa",
      descripcion: "Popcorn mediano + soda grande por un precio promocional.",
      imagen: "https://via.placeholder.com/300x200.png?text=Popcorn+%2B+Gaseosa"
    },
    {
      id: "2x1-nachos-viernes",
      titulo: "2×1 Nachos Viernes",
      descripcion: "Por cada nachos estándar, el segundo gratis. Sólo los viernes.",
      imagen: "https://via.placeholder.com/300x200.png?text=2x1+Nachos"
    },
    {
      id: "entrada-matine",
      titulo: "Entrada Matiné Sábados y Domingos",
      descripcion: "Entradas a precio reducido para funciones antes de las 17:00.",
      imagen: "https://via.placeholder.com/300x200.png?text=Entrada+Matin%C3%A9"
    },
    {
      id: "combo-familia",
      titulo: "Combo Familia 4 Personas",
      descripcion: "4 entradas + 2 popcorns medianos + 4 sodas por un solo precio.",
      imagen: "https://via.placeholder.com/300x200.png?text=Combo+Familia"
    },
    {
      id: "descuento-estudiante",
      titulo: "Descuento Estudiante",
      descripcion: "Presentando carnet, entrada a precio reducido todos los días.",
      imagen: "https://via.placeholder.com/300x200.png?text=Descuento+Estudiante"
    },
    {
      id: "domingo-retro",
      titulo: "Domingos Retro",
      descripcion: "Funciones + palomitas retro + gaseosa en oferta los domingos.",
      imagen: "https://via.placeholder.com/300x200.png?text=Domingos+Retro"
    },
    {
      id: "combo-dulces-gaseosa",
      titulo: "Combo Dulces + Gaseosa",
      descripcion: "Paquete de golosinas + soda 500 ml por un precio especial.",
      imagen: "https://via.placeholder.com/300x200.png?text=Combo+Dulces+%2B+Gaseosa"
    },
    {
      id: "preventa-estreno",
      titulo: "Preventa Estreno",
      descripcion: "Entrada + bebida gratis para estrenos seleccionados.",
      imagen: "https://via.placeholder.com/300x200.png?text=Preventa+Estreno"
    },
    {
      id: "club-vortex-descuento",
      titulo: "Club Vortex – 10% Off",
      descripcion: "Hacete socio y recibí 10% de descuento en entradas y dulces.",
      imagen: "https://via.placeholder.com/300x200.png?text=Club+Vortex+10%25"
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
          <img
            src={promo.imagen}
            alt={promo.titulo}
            style={{ width: "100%", height: "140px", objectFit: "cover" }}
          />
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
