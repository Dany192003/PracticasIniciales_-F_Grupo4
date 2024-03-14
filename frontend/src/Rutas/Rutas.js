import React from 'react'
import { Login } from '../Componets/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistroUsuario } from '../Componets/RegistrarUsuario';
import { TaskPage } from '../Componets/publicaciones';
import { RecuperarContraseña } from '../Componets/recuContraseña';
import { DatosUsuarios } from '../Componets/perfiles';


export const Rutas = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/RegistroUsuario" element={<RegistroUsuario/>}/>
   </Routes>
   </BrowserRouter>
  )
}
