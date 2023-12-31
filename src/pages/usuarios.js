import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([
        // Inicializa aquí tu lista de usuarios
        {
            id: 1,
            nombre: 'Usuario 1',
            correo: 'usuario1@example.com',
            telefono: '123-456-7890',
            fechaRegistro: '2023-01-01',
            estado: 'Activo',
        },
    ]);


    return (
        <div className='usuario-background'>
            <div className="usuarios-container">
                <div className="usuarios-header">
                    <h2 className="usuarios-title">Usuarios</h2>
                    <Link to="/crear-usuario" className="usuarios-agregar-btn">
                        Crear Usuario
                    </Link>
                </div>
                <hr className="usuarios-hr" />

                <table className="usuarios-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Fecha Registro</th>
                            <th>Estado</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td className='text'>{usuario.id}</td>
                                <td className='text'>{usuario.nombre}</td>
                                <td className='text'>{usuario.correo}</td>
                                <td className='text'>{usuario.telefono}</td>
                                <td className='text'>{usuario.fechaRegistro}</td>
                                <td className='text'>{usuario.estado}</td>
                                <td>
                                    {/* Agrega aquí el enlace o botón para ver detalles */}
                                    <Link to="/detalles-usuario=?" className="usuarios-detalles-btn">
                                        Detalles
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Usuarios;
