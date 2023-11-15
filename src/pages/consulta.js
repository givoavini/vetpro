import React, { useState } from 'react';
import imagen from '../assets/imagenes/frenchy.jpg'

const Consultas = () => {

  return (
    <div className='cita-background'>
    <div className="container mt-3 mb-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-transparent">
            <div className="card-header">
              <h5 className="card-title text-white">Datos de la Mascota</h5>
            </div>
            <div className="card-body text-center">
              <div className="position-relative mb-3">
                <div className="circle"></div>
                <img
                  src={imagen}
                  alt="Imagen de la Mascota"
                  className="rounded-circle img-thumbnail"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </div>
              <h6 className="card-subtitle mb-2 text-muted">Nombre de la Mascota</h6>

          <form>
            <div className="mb-3">
              <label htmlFor="fechaIngreso" className="form-label text-black">Fecha de Ingreso:</label>
              <input type="date" className="form-control" id="fechaIngreso" />
            </div>

            <div className="mb-3">
              <label htmlFor="motivo" className="form-label text-black">Motivo:</label>
              <input type="text" className="form-control" id="motivo" />
            </div>

            <div className="mb-3">
              <label htmlFor="tratamiento" className="form-label text-black">Tratamiento:</label>
              <textarea className="form-control" id="tratamiento" rows="3" maxLength="255"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="diagnostico" className="form-label text-black">Diagnóstico:</label>
              <textarea className="form-control" id="diagnostico" rows="3" maxLength="255"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="medicamentos" className="form-label text-black">Medicamentos:</label>
              <textarea className="form-control" id="medicamentos" rows="3" maxLength="255"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



  );

}


export default Consultas;