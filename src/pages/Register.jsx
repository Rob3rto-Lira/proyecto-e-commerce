import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { TokenContext } from '../context/TokenContext';
import { toaster } from "@/components/ui/toaster"; // Asegúrate de que esta ruta sea correcta en tu proyecto

const Register = () => {
  // Estados para los inputs
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(TokenContext);
  const navigate = useNavigate();

  // Obtenemos la URL base desde el .env
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validaciones locales de UI
    if (!nombre.trim() || !email.trim() || !password1.trim() || !password2.trim()) {
      toaster.create({
        title: "Campos vacíos",
        description: "Por favor, completa todos los datos.",
        type: "warning",
      });
      return;
    }

    if (password1.length < 6) {
      toaster.create({
        title: "Seguridad",
        description: "La contraseña debe tener al menos 6 caracteres.",
        type: "error",
      });
      return;
    }

    if (password1 !== password2) {
      toaster.create({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        type: "error",
      });
      return;
    }

    // 2. Envío de datos con Axios
    setLoading(true);
    try {
      // Axios automáticamente convierte el objeto a JSON y maneja los headers
      const { data } = await axios.post(`${API_URL}/auth/register`, {
        nombre,
        email,
        password: password1
      });

      // 3. Manejo de éxito
      toaster.create({
        title: "¡Registro exitoso!",
        description: "Tu cuenta ha sido creada. ¡Bienvenido!",
        type: "success",
      });

      // Guardamos el token en el contexto global
      if (data.token) {
        login(data.token);
      }
      
      // Redirigimos al Home
      navigate('/');

    } catch (error) {
      // 4. Manejo de errores con Axios
      // error.response contiene la respuesta fallida del servidor (400, 500, etc.)
      const errorMsg = error.response?.data?.message || "Hubo un problema con el servidor";
      
      toaster.create({
        title: "Error al registrar",
        description: errorMsg,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form 
        onSubmit={handleSubmit} 
        className="p-4 shadow-lg rounded bg-white" 
        style={{ maxWidth: '450px', width: '100%' }}
      >
        <h2 className="text-center mb-1">Crea tu cuenta</h2>
        <p className="text-muted text-center mb-4">Únete al Marketplace Cripto</p>

        <div className="mb-3">
          <label className="form-label">Nombre de usuario</label>
          <input 
            type="text"  
            className="form-control" 
            placeholder="Ej: Satoshi123"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="correo@ejemplo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Mínimo 6 caracteres"
            value={password1}
            onChange={(e)=> setPassword1(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Confirmar Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Repite tu contraseña"
            value={password2}
            onChange={(e)=> setPassword2(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          loading={loading}
          loadingText="Registrando..."
          width="full"
          bg="blue.600"
          color="white"
          _hover={{ bg: "blue.700" }}
          variant="solid"
          size="lg"
        >
          Crear cuenta
        </Button>
      </form>
    </div>
  );
};

export default Register;