import mysql from "mysql"

export const db = mysql.createConnection({
  host:"0.0.0.0",
  
  user:"root",
  password:"Maestre11",
  database:"social"
})