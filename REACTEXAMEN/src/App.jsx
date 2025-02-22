import { useState } from 'react';
import Registro from './components/Registro';

function App() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const validacion = () => {
    let errores = false;

    if (!data.name.trim()) {
      setError("El usuario no debe estar en blanco");
      errores = true;
    } else {
      setError("");
    }

    if (!data.email.trim()) {
      setError2("El correo no debe estar en blanco");
      errores = true;
    } else{
      setError2("");
    }

    if (!data.password.trim()) {
      setError3("La contraseña no debe estar en blanco");
      errores = true;
    } else if (data.password.length < 6) {
      setError3("La contraseña debe ser mayor a 6 caracteres");
      errores = true;
    } else {
      setError3("");
    }

    if (!errores) {
      setMostrarRegistro(true);
    }
  };

  return (
    <div>
      {!mostrarRegistro ? (
        <>
          <label>Name:</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <p>{error}</p>

          <label>Email:</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <p>{error2}</p>

          <label>Password:</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <p>{error3}</p>

          <button onClick={validacion}>Registrar</button>
        </>
      ) : (
        <Registro data={data} />
      )}
    </div>
  );
}

export default App;
