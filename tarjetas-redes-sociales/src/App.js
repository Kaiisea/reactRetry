import logo from "./logo.svg";
import "./App.css";
import { Tarjeta } from "./components/Tarjeta";

function App() {
  return (
    <div style={{display: 'flex',
    justifyContent: "space-between", 
    maxWidth: 720, 
    margin: '0 auto'}}>
    <Tarjeta
      titulo="TWITTER"
      descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textButton="READ MORE"
      color="black"
    />
    <Tarjeta
      titulo="INSTAGRAM"
      descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textButton="READ MORE"
      color="pink"
    />
    <Tarjeta
      titulo="YOUTUBE"
      descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      textButton="READ MORE"
      color="black"
    />
    </div>
  );
}

export default App;
