import "./Formulario.css";
import React, { useState } from 'react';

function RecuperarContraseña(props) {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');

  const handleRecuperarContraseña = () => {
    props.history.push('/solicitud-aceptada');
  };

  return (
    <div>
      <h1>Recuperar Contraseña</h1>
      <input type="text" placeholder="Código de Identificación" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button onClick={handleRecuperarContraseña}>Recuperar Contraseña</button>
    </div>
  );
}

export default RecuperarContraseña;
