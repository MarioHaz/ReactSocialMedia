import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from 'react';
import {AuthContext} from "../../context/authContext";
import Empresy from "../../assets/Logo-empresy.png"
import React, { useState } from "react";

const Login = () => {

  const [inputs, setInputs] = useState({
    email:"",
    password:"",
    name:"",
    
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
  };

  const{ login} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      await login(inputs);

    } catch(err){
      setErr(err.response.data);
    }
    
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
        <img src={Empresy}/>
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
              name="email"
              onChange={handleChange}
            />
            <input type="password" placeholder="Ingresa tu contraseña" name="password"
              onChange={handleChange}/>
              {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
