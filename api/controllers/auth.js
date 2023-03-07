import {db} from "../connect.js"
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Usuario ya existe!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("El usuario ha sido creado.");
    });
  });
};
export const login = (req, res) =>{

  const q= "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length ===0) return res.status(404).json("Usuario no encontrado");

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

    if(!checkPassword) return res.status(400).json("Usuario o Contraseña incorrecta")

    const token = Jwt.sign({id:data[0].id}, "secretkey");

    const {password, ...others} = data[0]

    res
    .cookie("accessToken", token, {
      httpOnly: true,
    })
    .status(200)
    .json(others);

  });
};

export const logout = (req, res) =>{
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("Usuario ha cerrado sesion")
};