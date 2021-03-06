import "./Tarjeta.css";

const colores = {
  color1: "black",
  color2: "pink",
}

export function Tarjeta(props) {
  return (
    <div
      className="Tarjeta-container"
      style={{
        border: `2px solid ${colores[props.color]}`,
      }}
    >
      <div style={{ padding: 16 }}>
        <h1 style={{ fontSize: "24", fontWeight: 900, textAlign: "center" }}>
          {props.titulo}
        </h1>
        <p style={{ textAlign: "center", marginBottom: 24 }}>
          {props.descripcion}
        </p>
        <button
          style={{
            width: "100%",
            height: 44,
            borderRadius: 22,
            backgroundColor: colores[props.color],
            border: "none",
            color: "white",
          }}
        >
          {props.textButton}
        </button>
      </div>
    </div>
  );
}
