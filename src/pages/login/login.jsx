import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from 'react';
import {AuthContext} from "../../context/authContext";

const Login = () => {

  const{ login} = useContext(AuthContext);
  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>emp</h1>
          <p>
            Bienvenido a la red social de los emprendedores, crea tu perfil y
            conecta con potenciales clientes y proveedores
          </p>
          <span>No tienes una Cuenta?</span>
          <Link to="/register">
            <button>Registrate</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Ingresa tu Correo Electronico"
            ></input>
            <input type="password" placeholder="Ingresa tu contraseña"></input>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
