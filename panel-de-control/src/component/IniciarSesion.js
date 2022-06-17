export function IniciarSesion() {
  return (
    <div className="children" style={{ float: "right", marginRight: "-50px" }}>
      <h1>Login</h1>
      <label for="uname">
        <b>Nombre de usuario</b>
      </label>
      <input className="input" type="text" placeholder="Introduce tu username" name="uname" required />
    </div>
  );
}
