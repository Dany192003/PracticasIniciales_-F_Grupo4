import React from 'react';

export function DatosUsuario() {
  const usuarioRegistrado = {
    registroAcademico: "",
    nombres: "",
    apellidos: "",
    correoElectronico: ""
  };

  return (
    <div>
      <h2>Datos del Usuario Registrado</h2>
      <p>Registro Académico: {usuarioRegistrado.registroAcademico}</p>
      <p>Nombres: {usuarioRegistrado.nombres}</p>
      <p>Apellidos: {usuarioRegistrado.apellidos}</p>
      <p>Correo Electrónico: {usuarioRegistrado.correoElectronico}</p>
    </div>
  );
}
