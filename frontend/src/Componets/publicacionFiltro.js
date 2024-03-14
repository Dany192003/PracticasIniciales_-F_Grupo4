import "./Formulario.css";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function RegistroUsuario({ onBackToLogin }) {
  const [publicaciones, setPublicaciones] = useState([]);
  const [nuevoTexto, setNuevoTexto] = useState("");
  const [comentarioTexto, setComentarioTexto] = useState("");
  const [comentarios, setComentarios] = useState({});
  const history = useHistory();

  const handlePublicacionSubmit = (e) => {
    e.preventDefault();

    if (!nuevoTexto.trim()) {
      return;
    }

    const nuevaPublicacion = {
      autor: nombres,
      texto: nuevoTexto,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      curso: ""
      catedratico: ""
    };

    setPublicaciones([...publicaciones, nuevaPublicacion]);
    setNuevoTexto("");
  };

  const handleVerPerfil = (nombre) => {
    history.push(`/perfil/${nombre}`);
  };

  const handleAutorClick = (nombre) => {
    handleVerPerfil(nombre);
  };

  const handleComentarioSubmit = (index) => {
    const comentariosCopy = { ...comentarios };
    if (!comentarioTexto.trim()) {
      return;
    }
    if (!comentariosCopy[index]) {
      comentariosCopy[index] = [];
    }
    comentariosCopy[index].push({
      autor: ""
      texto: comentarioTexto,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString()
    });
    setComentarios(comentariosCopy);
    setComentarioTexto("");
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
            <span onClick={() => handleAutorClick(publicacion.autor)}>{publicacion.autor}</span> ({publicacion.fecha} {publicacion.hora}) - {publicacion.texto} - Curso: {publicacion.curso}, Catedrático: {publicacion.catedratico}
            <form onSubmit={(e) => {
              e.preventDefault();
              handleComentarioSubmit(index);
            }}>
              <input type="text" placeholder="Agregar comentario" value={comentarioTexto} onChange={(e) => setComentarioTexto(e.target.value)} />
              <button type="submit">Comentar</button>
            </form>
            <ul>
              {comentarios[index] && comentarios[index].map((comentario, i) => (
                <li key={i}>
                  <span onClick={() => handleVerPerfil(comentario.autor)}>{comentario.autor}</span> ({comentario.fecha} {comentario.hora}): {comentario.texto}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
