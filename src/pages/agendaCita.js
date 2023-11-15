import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CrearCita = () => {
  const [cita, setCita] = useState({
    fecha: '',
    hora: '',
    veterinaria: '',
    veterinario: '',
    motivo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita((prevCita) => ({
      ...prevCita,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar la cita
    console.log('Cita guardada:', cita);
  };

  return (
    <div className='registrarcita-background'>
  <div className="card">
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <h2 className="card-title">Registrar Citas</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="fecha" className="form-label">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={cita.fecha}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="hora" className="form-label">Hora:</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={cita.hora}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="veterinaria" className="form-label">Veterinaria:</label>
            <select
              id="veterinaria"
              name="veterinaria"
              value={cita.veterinaria}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="veterinaria1">Veterinaria 1</option>
              <option value="veterinaria2">Veterinaria 2</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="veterinario" className="form-label">Veterinario:</label>
            <select
              id="veterinario"
              name="veterinario"
              value={cita.veterinario}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="vet1">Veterinario 1</option>
              <option value="vet2">Veterinario 2</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="motivo" className="form-label">Motivo:</label>
          <textarea
            id="motivo"
            name="motivo"
            rows="4"
            value={cita.motivo}
            onChange={handleChange}
            className="form-control"
            required
          ></textarea>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <button type="button" className="btn btn-danger">
              <Link to="/registros-mascota=?" className="text-white">Cancelar</Link>
            </button>
          </div>

          <div className="col-md-6 mb-3">
            <Link to="/registros-mascota=?" className="btn btn-primary text-white">Guardar</Link>
          </div>
        </div>

      </form>
    </div>
  </div>
</div>

  );
};

export default CrearCita;
