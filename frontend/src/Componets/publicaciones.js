import "./Formulario.css";
import React, { useState } from 'react';import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function RegistroUsuario({ onBackToLogin }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [nuevoTexto, setNuevoTexto] = useState("");
  const history = useHistory();


  const handlePublicacionSubmit = (e) => {
    e.preventDefault();

    if (!nuevoTexto.trim()) {
      return;
    }


    setPublicaciones([...publicaciones, { autor: nombres, texto: nuevoTexto }]);
    setNuevoTexto("");
  };

  const handleAutorClick = (nombre) => {
    history.push(`/autor/${nombre}`);
  };

  return (
    <div>
      <h2>Crear Publicación</h2>
      <button onClick={onBackToLogin}>Regresar al Login</button>
      <form onSubmit={handlePublicacionSubmit}>
        <textarea value={nuevoTexto} onChange={(e) => setNuevoTexto(e.target.value)} />
        <button type="submit">Publicar</button>
      </form>
      <h2>Publicaciones</h2>
      <ul>
        {publicaciones.map((publicacion, index) => (
          <li key={index}>
            <span onClick={() => handleAutorClick(publicacion.autor)}>{publicacion.autor}</span>: {publicacion.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
