import React, { useState } from 'react';
import imagen from '../assets/imagenes/frenchy.jpg'
import { Link } from 'react-router-dom';



const MascotaCard = () => {
    const initialFormData = {
        nombre: 'Nombre',
        edad: '',
        raza: '',
        genero: '',
        peso: '',
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

    const handleImageEdit = () => {

        console.log('Editar Imagen');
    };

    const handleDelete = () => {

        console.log('Eliminar Mascota');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Datos de la Mascota:', formData);
    };

    return (
        <div className='historial-background pb-5 row'>
            <div className="card mt-5 pl-4">
                <div className="row text-center ">
                    <div className="col-md-4 ml-3">
                        <div className="circle centro">
                            <img
                                src={imagen}
                                alt="Imagen de la Mascota"
                                className="rounded-circle img-thumbnail"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                        </div>
                        <p className="mt-2">{formData.nombre}</p>

                        <div className="mt-2 row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-secondary mr-2"
                                    onClick={handleImageEdit}
                                >
                                    Editar Imagen
                                </button>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                >
                                    Eliminar Mascota
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-8 ml-3">
                        <form className='' onSubmit={handleSubmit}>
                            <div className="form-group">
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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="edad">Edad:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edad"
                                        placeholder="Ingrese edad"
                                        value={formData.edad}
                                        onChange={handleChange}
                                        readOnly={!editMode}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="raza">Raza:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="raza"
                                        placeholder="Ingrese raza"
                                        value={formData.raza}
                                        onChange={handleChange}
                                        readOnly={!editMode}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="genero">Género:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="genero"
                                        placeholder="Ingrese género"
                                        value={formData.genero}
                                        onChange={handleChange}
                                        readOnly={!editMode}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="peso">Peso:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="peso"
                                        placeholder="Ingrese peso"
                                        value={formData.peso}
                                        onChange={handleChange}
                                        readOnly={!editMode}
                                    />
                                </div>
                            </div>
                            <div className='column'>
                                <div className="row mt-5">
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={toggleEditMode}
                                        >
                                            {editMode ? 'Guardar' : 'Editar Información'}

                                        </button>
                                    </div>
                                    <div className="col">
                                        <Link to="/registros-mascota=?" className="btn btn-primary btn-block ml-auto">
                                            Siguiente
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MascotaCard;
