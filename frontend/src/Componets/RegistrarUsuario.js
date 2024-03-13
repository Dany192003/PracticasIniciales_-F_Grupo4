import "./Formulario.css";
import { useState } from "react";

export function RegistroUsuario() {
    const [registroAcademico, setRegistroAcademico] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario al backend para el registro del usuario
        console.log({
            registroAcademico,
            nombres,
            apellidos,
            contraseña,
            correoElectronico
        });
    };

    return (
        <section>
            <h2>Registrar un Usuario</h2>
            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Registro académico"
                    value={registroAcademico}
                    onChange={(e) => setRegistroAcademico(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nombres"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                />
                <button type="submit">Registrar</button>
            </form>
        </section>
    );
}
