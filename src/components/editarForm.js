import React, { useState } from 'react';

const UserFormCard = () => {
  const initialFormData = {
    nombre: 'Usuario 1',
    correo: 'usuario1@example.com	',
    telefono: '123-456-7890',
    direccion: 'calle falsa 123',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales con los datos almacenados en formData
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="card">
      <form className='ml-5 custom-form' onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-9">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Ingrese nombre"
              value={formData.nombre}
              onChange={handleChange}
              readOnly={!editMode}
            />
          </div>
          <div className="form-group col-md-9">
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              placeholder="Ingrese correo"
              value={formData.correo}
              onChange={handleChange}
              readOnly={!editMode}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-9">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              placeholder="Ingrese teléfono"
              value={formData.telefono}
              onChange={handleChange}
              readOnly={!editMode}
            />
          </div>
          <div className="form-group col-md-9">
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              placeholder="Ingrese dirección"
              value={formData.direccion}
              onChange={handleChange}
              readOnly={!editMode}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-md-6" onClick={toggleEditMode}>
          {editMode ? 'Guardar' : 'Editar'}
        </button>
      </form>
    </div>
  );
};

export default UserFormCard;
