import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleCita = () => {
  const { fecha } = useParams();

  const obtenerInformacionCita = (fecha) => {
    // Puedes reemplazar esto con una llamada a una API o buscar en tu almacenamiento local
    return {
      fecha: fecha,
      hora: '14:30', // Hora de la cita
      mascota: 'Nombre de la mascota',
      propietario: 'Nombre del propietario',
      motivo: 'Motivo de la cita',
      veterinaria: 'veterinaria 2',
      veterinario: 'dr Bryan Moreno',
    };
  };

  const informacionCita = obtenerInformacionCita(fecha);

  return (
    <div className='agenda-background'>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Detalle de Cita</h2>
              <p className="mb-2"><strong>Fecha:</strong> {informacionCita.fecha}</p>
              <p className="mb-2"><strong>Hora:</strong> {informacionCita.hora}</p>
              <p className="mb-2"><strong>Mascota:</strong> {informacionCita.mascota}</p>
              <p className="mb-2"><strong>Propietario:</strong> {informacionCita.propietario}</p>
              <p className="mb-2"><strong>Motivo:</strong> {informacionCita.motivo}</p>
              <p className="mb-2"><strong>veterinaria:</strong> {informacionCita.veterinaria}</p>
              <p className="mb-2"><strong>Veterinario:</strong> {informacionCita.veterinario}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetalleCita;
