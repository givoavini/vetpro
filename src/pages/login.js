import React, { useState } from 'react';
import perroLogo from '../assets/imagenes/perro_logo.png';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí, por ejemplo, navegación a otra página
    navigate('/index');
  };

  return (
    <div className="login-container with-background">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <img src={perroLogo} alt="Logo de Perro" className="card-img-top p-4 mx-auto logo-imagen" />

              <div className="card-body text-center">
                <form onSubmit={handleSubmit} className="mx-auto">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>

                <p className="mt-3">¿Olvidaste tu contraseña? <a href="/recuperar">Recupérala aquí</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;
