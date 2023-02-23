import { Link } from "react-router-dom";
import "./register.scss";

const register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>emp</h1>
          <p>
            Bienvenido a la red social de los emprendedores, crea tu perfil y
            conecta con potenciales clientes y proveedores
          </p>
          <span>Ya tienes una cuenta?</span>
          <Link to="/login">
            <button>login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrate</h1>
          <form>
            <input
              type="password"
              placeholder="Ingresa el nombre de tu empresa"
            ></input>
            <input
              type="text"
              placeholder="Ingresa tu Correo Electronico"
            ></input>
            <input type="password" placeholder="Ingresa tu contraseña"></input>
            <input type="password" placeholder="Confirma tu contraseña"></input>
            <button>Registrate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
