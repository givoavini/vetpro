import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import LoginPage from "./pages/login";
import NavbarTop from "./components/NavbarTop";
import Sidebar from "./components/Navbarleft";
import Index from "./pages/index";
import Usuarios from "./pages/usuarios";
import CrearUsuario from "./pages/crearUsuario";
import Mascotas from "./pages/mascotas";
import CrearMascota from "./pages/crearMascota";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <div>
              <NavbarTop />
              <Sidebar />
              <div className="app-container">
                <Routes>
                  <Route path="/" element={<Navigate to="/index" />} />
                  <Route path="/index" element={<Index />} />
                  <Route path="/usuarios" element={<Usuarios />} />
                  <Route path="/crear-usuario" element={<CrearUsuario />} />
                  <Route path="/mascotas" element={<Mascotas />} />
                  <Route path="/crear-mascota" element={<CrearMascota />} />

                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
