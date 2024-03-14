const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./env/.env" });

//Servidor
const app = express();
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000...");
});

//configuración servidor
app.use(bodyParser.json());
app.use(cors());

//----------------------------------------------------------------------------------------------------------------------------------------------

const connection = require("../database/db");

app.get("/autentificar", function (req, res) {
  const carnet = req.body.carnet;
  const contraseña = req.body.contraseña;

  if (carnet && contraseña) {
    connection.query(
      "SELECT * FROM estudiante WHERE carnet = ?",
      [carnet],
      (error, resultados) => {
        if (
          resultados.length == 0 ||
          !(resultados[0].contraseña == contraseña)
        ) {
          res.send("USUARIO Y/O CONTRASEÑA INCORRECTOS");
        } else {
          res.send("LOGIN CORRECTO");
        }
      }
    );
  } else {
    res.send("DATOS INCOMPLETOS");
  }
});

app.post("/registrar", (req, res) => {
  const carnet = req.body.carnet;
  const nombres = req.body.nombres;
  const apellidos = req.body.apellidos;
  const contraseña = req.body.contraseña;
  const correo = req.body.correo;

  if (carnet) {
    connection.query(
      "SELECT * FROM estudiante WHERE carnet = ?",
      [carnet],
      (error, resultados) => {
        if (resultados.length == 0) {
          connection.query(
            "INSERT INTO estudiante SET ?",
            {
              carnet: carnet,
              nombres: nombres,
              apellidos: apellidos,
              contraseña: contraseña,
              correo: correo,
            },
            (error, resultado) => {
              if (error) {
                console.log("Error al registrar usuario:", error);
                return;
              } else {
                res.send("USUARIO REGISTRADO");
              }
            }
          );
        } else {
          res.send("El cui ya existe!");
        }
      }
    );
  }
});

app.get("/verificarDatos", (req, res) => {
  const carnet = req.body.carnet;
  const correo = req.body.correo;

  if (carnet && correo) {
    connection.query(
      "SELECT * FROM estudiante WHERE carnet = ?",
      [carnet],
      (error, resultados) => {
        if (resultados.length != 0 && resultados[0].correo == correo) {
          res.send("DATOS CORRECTOS, PUEDE CAMBIAR SU CONTRASEÑA");
        } else {
          res.send("CARNET Y/O CORREO INCORRECTOS");
        }
      }
    );
  } else {
    res.send("DATOS INCOMPLETOS");
  }
});

app.put("/cambiarContra", (req, res) => {
  const carnet = req.body.carnet;
  const nuevaContra = req.body.nuevaContra;

  if (carnet && nuevaContra) {
    connection.query("UPDATE ");
  } else {
    res.send("DATOS INCOMPLETOS");
  }
});

app.post("/nuevaPublicación", (req, res) => {
  const cui = req.body.cui;
  const curso = req.body.curso;
  const catedratico = req.body.catedratico;
  const mensaje = req.body.mensaje;
  const fecha_publicación = req.body.fecha_publicación;

  if (curso) {
    codPubli = generarCodPublicacion();
    connection.query("INSERT INTO publicacion SET ?", {
      cod_publicacion: codPubli,
      mensaje: mensaje,
      fecha_creacion: fecha_publicación,
      estudiante_cui: cui,
    });
  } else if (catedratico) {
    connection.query();
  } else {
    res.send(
      "DEBE SELECCIONAR UN CURSO O CATEDRATICO PARA HACER UNA PUBLICACIÓN"
    );
  }
});

app.get("/", (req, res) => {
  res.send("Menu Principal");
});

app.post("/comentario", (req, res) => {});

app.get("/verPerfil", (req, res) => {});

app.get("/cursosAprobados", (req, res) => {});

function generarCodPublicacion() {
  connection.query("SELECT * FROM publicacion", (error, resultados) => {
    if (resultados.length > 0) {
      return resultados.length + 1;
    } else {
      return 1;
    }
  });
}
