function Registro({ data }) {
    return (
      <div>
        <h2>Datos Registrados:</h2>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.password}</p>
      </div>
    );
  }
  
  export default Registro;
  