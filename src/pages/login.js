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
      <div className="login-card">
        <img src={perroLogo} alt="Logo de Perro" className="logo-image" />

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="submit-button">Ingresar</button>
          </form>

          <p className="forgot-password">¿Olvidaste tu contraseña? <a href="/recuperar">Recupérala aquí</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
