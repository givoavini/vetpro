import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


const CrearMascota = () => {
    const [rol, setRol] = useState('');

    const handleRolChange = (e) => {
        setRol(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };





    return (
        <div className='crearMascota-background centro'>
            <div className="card">
                <div className="card-header">
                    <h2>Crear Mascota</h2>
                </div>
                <div className="card-body">
                    <button className="cancelar-btn">
                        <Link to="/usuarios" className="text-white">
                            Cancelar
                        </Link>
                    </button>
                    <hr />

                    <form className="formulario-usuario">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha de nacimiento:</label>
                            <input type="text" className="form-control" id="fecha" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="especie">Especie:</label>
                            <input type="text" className="form-control" id="especie" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="edad">Edad:</label>
                            <input type="email" className="form-control" id="edad" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genero">Genero:</label>
                            <input type="number" className="form-control" id="genero" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="raza">Raza:</label>
                            <input type="text" className="form-control" id="raza" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dueno">Dueño:</label>
                            <input type="text" className="form-control" id="dueno" />
                        </div>

                        <div className="form-group">
                            <label>Foto:</label>
                            <div className="foto-container">
                                <button className="agregar-foto-btn">
                                    <FontAwesomeIcon icon={faImage} className="icon" />
                                    Agregar imagen
                                </button>
                            </div>
                        </div>
                        <Link to="/mascotas" className="guardar-btn">
                            Guardar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CrearMascota;
