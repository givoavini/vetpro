import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faPaw,
    faCalendar,
    faClinicMedical,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const toggleMenu = () => {
        const verticalNav = document.querySelector('.vertical-nav');
        verticalNav.classList.toggle('open');
    };
    return (
<nav className="vertical-nav bg-light elemento-superpuesto">
    <div className="hamburger-menu superpuesto " onClick={toggleMenu} >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    <ul className="nav flex-column">
        <li className="nav-item">
            <Link to="/index" className="nav-link">
                <FontAwesomeIcon icon={faHome} />
                <span>Inicio</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/usuarios" className="nav-link">
                <FontAwesomeIcon icon={faUser} />
                <span>Usuarios</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/mascotas" className="nav-link">
                <FontAwesomeIcon icon={faPaw} />
                <span>Mascotas</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/citas" className="nav-link">
                <FontAwesomeIcon icon={faCalendar} />
                <span>Citas</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/veterinarios" className="nav-link">
                <FontAwesomeIcon icon={faClinicMedical} />
                <span>Veterinarios</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faTimes} />
                <span>cerrar sesion</span>
            </Link>
        </li>
    </ul>
</nav>


    );
};


export default Sidebar;
