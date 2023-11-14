import React from 'react';
import logo from '../assets/imagenes/casa.png';

const NavbarTop = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <header className="header container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className='logo-image' />
        </div>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="search-container">
                        <input type="text" placeholder="Buscar mascota..." className="form-control search-input" />
                    </div>
                </li>
            </ul>
        </div>
        <div className="align-self-end">
            <span className="nav-link welcome">Bienvenido usuario</span>
        </div>
    </header>
</nav>

  );
};

export default NavbarTop;