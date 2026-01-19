import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TokenContext } from '../context/TokenContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Estado para el botón
  
  const { token, setToken, isAuthenticated } = useContext(TokenContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Bloquear botón

    try {
      // Usar una URL base o variable de entorno es mejor
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      // Mejora 2: Actualizar el contexto global
      setToken(data.token); 
      localStorage.setItem('token', data.token); 
      
      navigate('/');
    } catch (error) {
      const msg = error.response?.data?.message || 'Credenciales inválidas';
      alert(msg);
    } finally {
      setLoading(false); // Desbloquear botón
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-3">Inicia Sesión</h2>
        <p className="text-muted text-center mb-4">Gestiona tus finanzas ahora</p>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">E-mail</label>
          <input 
            type="email" // Tipo email para validación nativa
            className="form-control" 
            id="emailInput"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="passwordInput"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary w-100" 
          disabled={loading} // Evita doble submit
        >
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;