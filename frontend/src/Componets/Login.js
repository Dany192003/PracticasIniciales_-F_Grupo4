import "./Formulario.css";
import { useState } from "react";
import logo from "./logo.png"; // Importa el logo

export function Login() {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [recordarUsuario, setRecordarUsuario] = useState(false);

    const handleRecordarUsuario = () => {
        setRecordarUsuario(!recordarUsuario);
    };

    return (
        <section>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <h2>INICIAR SESION INGENERIA USAC</h2>
            <form className="formulario">
                <input
                    type="text"
                    id="user"
                    placeholder="CUI/REGISTRO ACADEMICO/REGISTROPERSONAL"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="password"
                    id="pass"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={recordarUsuario}
                        onChange={handleRecordarUsuario}
                    />
                    Recordar usuario
                </label>
                <button>Iniciar Sesión</button>
            </form>
            <p className="forgot-password">
                <a href="/olvidaste-contraseña">¿Olvidaste tu contraseña?</a>
            </p>
        </section>
    );
}
