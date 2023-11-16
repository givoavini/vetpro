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
import Veterinario from "./pages/veterinarios";
import Consultas from "./pages/consulta";
import DetalleUsuario from "./pages/detalleUsuario";
import MascotaCard from "./pages/detalleMascota";
import Mascotaregistros from "./pages/mascota-registros";
import Crearcita from "./pages/agendaCita";
import CalendarioCita from "./pages/calendarioCitas";
import DetalleCita from "./pages/detalleCita";
import RecuperarContrasena from "./pages/recuperarcontraseña";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Recuperar" element={<RecuperarContrasena />} />


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
                  <Route path="/Detalles-usuario=?" element={<DetalleUsuario />} />
                  <Route path="/crear-usuario" element={<CrearUsuario />} />
                  <Route path="/mascotas" element={<Mascotas />} />
                  <Route path="/crear-mascota" element={<CrearMascota />} />
                  <Route path="/veterinarios" element={<Veterinario />} />
                  <Route path="/registar-consulta" element={<Consultas />} />
                  <Route path="/detalle-mascota=?" element={<MascotaCard />} />
                  <Route path="/registros-mascota=?" element={<Mascotaregistros />} />
                  <Route path="/Crear-cita" element={<Crearcita />} />
                  <Route path="/citas" element={<CalendarioCita />} />
                  <Route path="/detalle-cita/:fecha" element={<DetalleCita />} />

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
