import CardPelicula from "./CardPelicula";

function ListaPeliculas({ peliculas }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px,1fr))", gap:"15px"}}>
      {peliculas.map(p => (
        <CardPelicula key={p.id} pelicula={p} />
      ))}
    </div>
  )
}

export default ListaPeliculas;
