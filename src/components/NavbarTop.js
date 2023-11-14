import React from 'react';
import logo from '../assets/imagenes/casa.png';

const NavbarTop = () => {
  return (
    <nav className="navbar-top">
      <header className="header">
        <img src={logo} alt="Logo" className='logo-image' />
        <div className="search-container">
          <input type="text" placeholder="   Buscar mascota..." className="search-input" />
        </div>
        <div className="welcome">Bienvenido usuario</div>
      </header>
    </nav>
  );
};

export default NavbarTop;