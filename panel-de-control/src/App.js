import logo from './logo.svg';
import './App.css';
import { IniciarSesion } from "./component/IniciarSesion";
import { PanelControl } from "./component/PanelControl";
import { ComponentePadre } from './component/ComponentePadre';

function App() {

  const isLoggedIn = false

  return (
    <div>
    <ComponentePadre>
      {isLoggedIn ? <PanelControl/> : <IniciarSesion/>}
    </ComponentePadre>
    </div>
  );
}

export default App;
