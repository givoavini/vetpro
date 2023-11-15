import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Mascotas = () => {
    const [Mascotas, setmascotas] = useState([
        // Inicializa aquí tu lista de mascotas
        {
            id: 1,
            nombre: 'Usuario 1',
            edad: '5',
            especie: 'perro',
            genero: 'macho',
            raza: 'Buldog',
            fechaRegistro: '2023-01-01',
            estado: 'Activo',
        },
    ]);


    return (
        <div className='mascotas-background'>
            <div className="usuarios-container">
                <div className="usuarios-header">
                    <h2 className="mascota-title">Mascotas</h2>
                </div>
                <hr className="usuarios-hr" />
                <div className='card-mascota'>
                    <table className="usuarios-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Especie</th>
                                <th>Genero</th>
                                <th>Raza</th>
                                <th>Fecha Registro</th>
                                <th>Estado</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Mascotas.map((mascota) => (
                                <tr key={mascota.id}>
                                    <td className='mascota-text'>{mascota.nombre}</td>
                                    <td className='mascota-text'>{mascota.edad}</td>
                                    <td className='mascota-text'>{mascota.especie}</td>
                                    <td className='mascota-text'>{mascota.genero}</td>
                                    <td className='mascota-text'>{mascota.raza}</td>
                                    <td className='mascota-text'>{mascota.fechaRegistro}</td>
                                    <td className='mascota-text'>{mascota.estado}</td>
                                    <td>
                                        <Link to="/detalle-mascota=?" className="usuarios-detalles-btn">
                                            detalles
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Mascotas;
