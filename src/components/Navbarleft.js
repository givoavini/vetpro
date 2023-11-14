import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faPaw,
    faCalendar,
    faClinicMedical
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const toggleMenu = () => {
        const verticalNav = document.querySelector('.vertical-nav');
        verticalNav.classList.toggle('open');
    };
    return (
        <nav className="vertical-nav">
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul>
                <li>
                    <Link to="/index">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Inicio</span>
                    </Link>
                </li>
                <li>
                    <Link to="/usuarios">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Usuarios</span>
                    </Link>
                </li>
                <li>
                    <Link to="/mascotas">
                        <FontAwesomeIcon icon={faPaw} />
                        <span>Mascotas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/citas">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Citas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/veterinarios">
                        <FontAwesomeIcon icon={faClinicMedical} />
                        <span>Veterinarios</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};


export default Sidebar;
