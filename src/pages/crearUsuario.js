import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


const CrearUsuario = () => {
    const [rol, setRol] = useState('');

    const handleRolChange = (e) => {
        setRol(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };





    return (
        <div className='usuarios-background centro'>
            
            <div className="card">
                <div className="card-header">
                    <h2>Nuevo Usuario</h2>
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
                            <label htmlFor="documento">Documento:</label>
                            <input type="text" className="form-control" id="documento" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="correo">Correo:</label>
                            <input type="email" className="form-control" id="correo" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Telefono:</label>
                            <input type="number" className="form-control" id="telefono" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="direccion">Direccion:</label>
                            <input type="text" className="form-control" id="direccion" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rol">Rol:</label>
                            <select
                                id="rol"
                                className="form-control"
                                value={rol}
                                onChange={handleRolChange}
                            >
                                <option value="">Selecciona un rol</option>
                                <option value="usuario">Usuario</option>
                                <option value="auxiliar">Auxiliar</option>
                                <option value="veterinario">Veterinario</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contraseña">Contraseña:</label>
                            <input type="text" className="form-control" id="contraseña" />
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
                        <Link to="/usuarios" className="guardar-btn">
                            Guardar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CrearUsuario;
