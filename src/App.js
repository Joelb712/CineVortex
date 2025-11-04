import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Pages/HomePage";
import PeliculasPage from "./components/Pages/PeliculasPage";
import RegistroPage from "./components/Pages/RegistroPage";
import PeliculaDetalle from './components/PeliculaDetalle';

  // font-family: 'Arial', sans-serif;
  // min-height: 100vh;

  // flex-direction: column;
function App() {
  return (
    <BrowserRouter>
      <div style={{background:'#0b0b0d',color:'#ffffff',display:'flex',flexDirection:'column',minHeight:'100vh'}}>
        <header style={{textAlign:'center'}}>
          <h1 style={{textAlign:'center'}}>Cine Vortex</h1>
        </header>

        <Navbar/>

        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/peliculas" element={<PeliculasPage />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
            <Route path="*" element={<h2>Página no encontrada - Error 404</h2>} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', marginTop: 'auto', padding: '20px', background: '#1b1b1f', color: '#bbb', borderTop:'1px' }}>
          <p>© 2025 Cine Vortex. Todos los derechos reservados.</p>
          <p>Redes: Instagram | Twitter | Facebook</p>
      </footer>
      </div>
    </BrowserRouter> 
  );
}

export default App;
