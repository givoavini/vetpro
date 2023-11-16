import React from 'react';
import { Link } from 'react-router-dom';

const RecuperarContrasena = () => {
    const handlePasswordRecovery = () => {

    };

    return (
        <div className="with-background d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1>Recuperar Contraseña</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">correo</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <Link to="/" onClick={handlePasswordRecovery} className="btn btn-primary">
                    recuperar
                </Link>
            </div>
        </div>
    );
};

export default RecuperarContrasena;

