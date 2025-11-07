import React from "react";
import { useForm } from "react-hook-form";
import "./RegistroPage.css";

function RegistroPage() {
  
  const {
    register,        
    handleSubmit,    
    reset,          
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(`Gracias por registrarte, ${data.nombre}!`);
    reset();
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

        <form onSubmit={handleSubmit(onSubmit)} className="registro-form">

          
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              placeholder="Tu nombre"
              maxLength={30}
              {...register("nombre", { 
                required: "El nombre es obligatorio",
                pattern:{
                  value:/^[A-Za-z\s]+$/,
                  message: "El nombre solo permite letras y espacios"  
                }
              })}
            />
            {errors.nombre && <p className="error">{errors.nombre.message}</p>}
          </div>

          
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              placeholder="Tu apellido"
              maxLength={30}
              {...register("apellido", { 
                required: "El apellido es obligatorio",
                pattern:{
                  value:/^[A-Za-z\s]+$/,
                  message: "El apellido solo permite letras y espacios"
                }
              })}
            />
            {errors.apellido && <p className="error">{errors.apellido.message}</p>}
          </div>

          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato del email no es válido"
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Dni:</label>
            <input
              type="dni"
              placeholder="40123456"
              maxLength={9}
              {...register("dni", {
                required: "El dni es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números"
                }
              })}
            />
            {errors.dni && <p className="error">{errors.dni.message}</p>}
          </div>

          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              {...register("fechaNac", { required: "La fecha de nacimiento es obligatoria" })}
            />
            {errors.fechaNac && <p className="error">{errors.fechaNac.message}</p>}
          </div>

          
          <div className="form-group">
            <label>Teléfono (opcional):</label>
            <input
              type="tel"
              placeholder="123 456-7890"
              maxLength={12}
              {...register("telefono", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números"
                }
              })}
            />
            {errors.telefono && <p className="error">{errors.telefono.message}</p>}
          </div>

          <button type="submit" className="btn-submit">Registrarse</button>
        </form>
      </section>
    </div>
  );
}

export default RegistroPage;
