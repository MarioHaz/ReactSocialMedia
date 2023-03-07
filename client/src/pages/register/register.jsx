import { Link } from "react-router-dom";
import "./register.scss";
import Empresy from "../../assets/Logo-empresy.png"
import { useState } from "react";
import axios from "axios";


const Register = () => {


  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev)=>({...prev, [e.target.name]:e.target.value}))
  };

  const handleClick = async (e) =>{
    e.preventDefault()

    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    }catch(err){
      setErr(err);
    }
  };

  console.log(err)
  
  return (
    <div className="register">
      <div className="card">
        <div className="left">
        <img src={Empresy}/>
          <p>
            Bienvenido a la red social de las Empresas, crea tu perfil y
            conecta con potenciales clientes y proveedores.
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
              type="text"
              placeholder="Ingresa nombre de usuario"
              name="username"
              onChange={handleChange}
              />
            <input
              type="email"
              placeholder="Ingresa tu Correo Electronico"
              name="email"
              onChange={handleChange}
              />
            <input type="password" 
              placeholder="Ingresa tu contraseña"
              name="password"
              onChange={handleChange} 
             />
            {/* {err && err} */}
            <button onClick={handleClick}>Registrate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
