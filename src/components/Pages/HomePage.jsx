import React from "react";
import Cartelera from "../Cartelera";
import Proximamente from "../Proximamente";
import Horarios from "../Horarios";
import Promociones from "../Promociones";
import { peliculasData } from "../Peliculas";
import "./HomePage.css";

function HomePage() {

  return (
    <div>

      <section className="home-section">
        <h2>Horarios</h2>
        <Horarios/>
      </section>

      <section  className="home-section">
        <h2>Cartelera Hoy</h2>
        <Cartelera peliculas={peliculasData}/>
      </section>

      <section className="home-section">
        <h2>Próximamente</h2>
        <Proximamente peliculas={peliculasData}/>
      </section>

      <section className="home-section">
        <h2>Promociones</h2>
        <Promociones />
      </section>

    </div>
  );
}


export default HomePage;
