import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TokenContext } from '../context/TokenContext';
import { Button } from '@chakra-ui/react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Extraemos 'login' y 'setToken' del contexto
    const { isAuthenticated, isLoading, login, setToken } = useContext(TokenContext);
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;


    console.log("Tipo de isAuthenticated:", typeof isAuthenticated);
    console.log("Valor de isAuthenticated:", isAuthenticated);

    useEffect(() => {
        // Si ya no está cargando el auth inicial y está autenticado, fuera de aquí
        if (!isLoading && isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, isLoading, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            // USAMOS LA FUNCIÓN DEL CONTEXTO:
            // Esto guarda en localStorage Y actualiza el estado 'token' a la vez
            login(data.token);

            alert('¡Bienvenido!');
            navigate('/');
        } catch (error) {
            const msg = error.response?.data?.message || 'Credenciales inválidas';
            alert(msg);
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) return <div className="text-center mt-5">Verificando sesión...</div>;

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-white" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-3">Inicia Sesión</h2>
                <p className="text-muted text-center mb-4">Gestiona tus finanzas ahora</p>

                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">E-mail</label>
                    <input
                        type="email"
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

                <Button
                    type="submit"
                    loading={loading}
                    loadingText="Entrando..."
                    width="full"
                    // Forzamos los colores manualmente
                    bg="blue.600"
                    color="white"
                    _hover={{ bg: "blue.700" }}
                    // En v3, a veces 'variant' resetea el fondo, así que lo quitamos o usamos 'solid'
                    variant="solid"
                >
                    Entrar
                </Button>

            </form>
        </div>
    );
};

export default Login;