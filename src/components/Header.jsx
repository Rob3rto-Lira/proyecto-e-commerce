import { Button, HStack } from "@chakra-ui/react"
import { TokenContext } from "../context/TokenContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
// import LogoutButton from "./LogoutButton"; // Asegúrate de importar esto si existe

const Header = () => {
  const { token } = useContext(TokenContext);

  // Definimos una función simple para las clases de los links
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link text-info fw-bold" : "nav-link text-light";

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <NavLink to='/' className={linkClass}>
        <button className="btn btn-outline-warning">Marketplace cripto</button>
      </NavLink>

      <div>
        {token ? (
          <div className="d-flex gap-2">
            <li className="nav-item text-light btn btn-dark">
              <LogoutButton />
            </li>
          </div>
        ) : (
          <div className="d-flex gap-2">
            {/* Usamos NavLink correctamente sin variables inexistentes */}
            <NavLink to='/Login' className={linkClass}>
              <button className="btn btn-dark border-secondary">Login</button>
            </NavLink>

            <NavLink to='/Register' className={linkClass}>
              <button className="btn btn-dark border-secondary">Register</button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header