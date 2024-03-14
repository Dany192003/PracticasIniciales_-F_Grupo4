const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  port: process.env.BD_PORT,
  database: process.env.BD_DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.log("El error de conexión es:", error);
    return;
  }
  console.log("Conectado a la base de datos:", process.env.BD_DATABASE);
});

module.exports = connection;
