import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar token
    localStorage.removeItem('token');
    
    // Opcional: Limpiar estado global si usas Context/Redux
    // setUser(null);
    
    // Redirigir al login
    navigate('/login');
    
    // Recargar la página para limpiar estado (opcional)
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} className="text-light btn btn-dark">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;