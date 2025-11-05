import React, { useState, useMemo } from "react";
import { peliculasData } from "../Peliculas";
import Buscador from "../Buscador"; 
import FiltroCategorias from "../FiltroCategorias"; 
import ListaPeliculas from "../ListaPeliculas"; 
import { Link } from "react-router-dom";

function PeliculasPage() {
  

  
    const categorias = [
        "todas",
        "acción",
        "comedia",
        "terror",
        "animación",
        "drama",
        "ciencia ficción"
    ];

    
    const [buscarPeli, setBuscarPeli] = useState("");
    const [categoriaActiva, setCategoriaActiva] = useState("todas");

    
    const peliculasFiltradas = useMemo(() => {
        const texto = buscarPeli.trim().toLowerCase();

        return peliculasData.filter((p) => {

            if (!p || !p.titulo || !p.categoria) return false;

            const matchCategoria =
                categoriaActiva.toLowerCase() === "todas"? true: p.categoria.toLowerCase() === categoriaActiva.toLowerCase();
            const matchTexto = p.titulo.toLowerCase().includes(texto);
            return matchCategoria && matchTexto;
        });
    }, [buscarPeli, categoriaActiva]);

    return (
        <div>
            <header>
                <p style={{ textAlign:'center' }}>En esta sección puedes consultar nuestro catálogo de películas, si un título está aquí es porque está o estará disponible.
                </p>
            </header>

            {/* Barra de busqueda*/}
            <section style={{ marginTop: "20px" }}>
                <Buscador value={buscarPeli} onChange={(val) => setBuscarPeli(val)} />
            </section>

            {/* Filtro de categoria*/}
            <section style={{ marginTop: "10px" }}>
                <FiltroCategorias
                    categorias={categorias}
                    activa={categoriaActiva}
                    onChange={(cat) => setCategoriaActiva(cat)}
                />
            </section>

            {/* Lista de peliculas */}
            <section style={{ marginTop: "20px" }}>
                
                {typeof ListaPelis !== "undefined" ? (
                    <ListaPeliculas peliculas={peliculasFiltradas} />
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                        {peliculasFiltradas.map((p) => (
                            <div
                                key={p.id}
                                style={{
                                width: 180,
                                borderRadius: 6,
                                overflow: "hidden",
                                background: "#111",
                                color: "#eee",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.6)"
                                }}
                            >
                                <img
                                    src={p.poster}
                                    alt={p.titulo}
                                    style={{ width: "100%", height: "270px", objectFit: "cover" }}
                                />
                                <div style={{ padding: "8px" }}>
                                    <h4 style={{ margin: "0 0 6px 0", fontSize: "14px" }}>{p.titulo}</h4>
                                    <p style={{ margin: "0 0 8px 0", fontSize: "12px", opacity: 0.8 }}>{p.categoria} • {p.año}</p>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <Link
                                            to={`/peliculas/${p.id}`}
                                            style={{
                                                textDecoration: "none",
                                                padding: "6px 8px",
                                                background: "#6b21a8",
                                                color: "white",
                                                borderRadius: 4,
                                                fontSize: 12
                                            }}
                                            >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default PeliculasPage;
