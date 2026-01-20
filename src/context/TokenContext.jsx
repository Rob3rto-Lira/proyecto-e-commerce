import { createContext, useState, useEffect } from "react";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => { 
    const [token, setToken] = useState(null); // Inicialmente null
    const [isLoading, setIsLoading] = useState(true); // Para saber cuando terminó de verificar

    
    useEffect(() => {
        const checkToken = () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken); 
            } else {
                setToken(false); 
            }
            setIsLoading(false);
        };

        checkToken();
    }, []);

    
    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    // Función para logout (eliminar token)
    const logout = () => {
        localStorage.removeItem('token');
        setToken(false);
    };

    // Función para verificar si está autenticado
    const isAuthenticated = !!token;
    
    const value = {
        token,
        setToken,
        login,
        logout,
        isAuthenticated,
        isLoading
    };

    return (
        <TokenContext.Provider value={value}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenProvider;