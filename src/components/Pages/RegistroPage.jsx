import React, { useState } from "react";
import "./RegistroPage.css"; // CSS específico

function RegistroPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${formData.nombre}!`);
    setFormData({ nombre: "", email: "", telefono: "" });
  };

  return (
    <div className="registro-container">
      <header className="registro-header">
        <h1>Únete a Cine Vortex</h1>
        <p>Hazte miembro y disfruta de beneficios exclusivos:</p>
      </header>

      <section className="registro-benefits">
        <h2>Beneficios de ser miembro</h2>
        <ul>
          <li>Acceso anticipado a estrenos</li>
          <li>Promociones especiales en entradas y combos</li>
          <li>Descuentos en productos del cine</li>
          <li>Invitaciones a eventos exclusivos</li>
          <li>Acumulación de puntos por cada compra</li>
        </ul>
      </section>

      <section className="registro-form-section">
        <h2>Formulario de registro</h2>
        <form onSubmit={handleSubmit} className="registro-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Tu apellido"
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
          </div>

          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              name="fechaNac"
              value={formData.fechaNac}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono (opcional):</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              inputMode="numeric"
              pattern="^[0-9]+$"
            />
          </div>

          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </section>
    </div>
  );
}

export default RegistroPage;
