import React from 'react';
import { Link } from 'react-router-dom';
import UserFormCard from '../components/editarForm'



const Circle = () => (

    <div className="agregar-foto-btn"></div>
);

const UserDetailsCard = () => (
    <div className="card mx-auto">
        <div className="centro">
            <Circle />
        </div>
        <div className="card-body">
            <p className="card-text mb-1">Nombre: Usuario 1</p>
            <p className="card-text mb-1">Fecha de Registro: 01/01/2023</p>
            <p className="card-text mb-3">Fecha de Modificación: 02/01/2023</p>
            <button className="btn btn-danger">Bloquear</button>
        </div>
    </div>

);

const PetsTable = () => (
    <div className="card">
        <table className="table">
            <thead>
                <tr>
                    <th>Mascota</th>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nombre Mascota</td>
                    <td>Especie Mascota</td>
                    <td>Raza Mascota</td>
                    <td><Link to="/detalle-mascota=?" className="btn btn-info">
                        Detalle
                    </Link></td>
                </tr>
            </tbody>
        </table>
    </div>
);

const DetalleUsuario = () => (
    <div className='usuarios-background mb-3'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Usuario (NOMBRE)</h2>
                    <Link to="/usuarios" className="btn btn-primary">
                        Regresar
                    </Link>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <UserDetailsCard />
                </div>

                <div className="col-md-6">
                    <UserFormCard />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <PetsTable />
                </div>
            </div>

            <div className="row">
                <div className="col text-center mt-3 mb-3">
                    <Link to="/crear-mascota" className="btn btn-success">
                        Mascota
                    </Link>
                </div>
            </div>
        </div>
    </div>


);

export default DetalleUsuario;
