const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Servidor
const app = express();
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});

//configuración servidor
app.use(bodyParser.json());
app.use(cors());
