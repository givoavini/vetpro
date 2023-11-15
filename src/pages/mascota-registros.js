import React from 'react';
import { Link } from 'react-router-dom';

const Mascotaregistros = () => {
    return (
        <div className='historial-background pb-5 row'>
            <div className="container mt-5">

                <div className="row">
                    <div className="col">
                        <h2>Registro de Visitas</h2>
                        <hr />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Motivo</th>
                                    <th>Diagnóstico</th>
                                    <th>Veterinario</th>
                                    <th>Veterinaria</th>
                                    <th>Historial</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2023-01-01</td>
                                    <td>Consulta general</td>
                                    <td>Buen estado de salud</td>
                                    <td>Dr. Pérez</td>
                                    <td>Clínica Animal</td>
                                    <td>
                                        <button className="btn btn-info">Historial</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Registro de Citas */}
                <div className="row mt-5">
                    <div className="col">
                        <h2>Registro de Citas</h2>
                        <Link to="/crear-cita" className="btn btn-primary mb-3">
                            Agregar
                        </Link>
                        <hr />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Veterinario</th>
                                    <th>Motivo</th>
                                    <th>Veterinaria</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2023-01-05</td>
                                    <td>Dr. González</td>
                                    <td>Control de vacunas</td>
                                    <td>Clínica Animal</td>
                                    <td>
                                        <button className="btn btn-info">Detalle</button>
                                        <button className="btn btn-danger ml-2">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mascotaregistros;
