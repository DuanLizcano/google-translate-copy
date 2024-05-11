import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <div>
      <h1> Google Translate by: Duan Lizcano</h1>
      <button onClick={() => setFromLanguage("es")}>Cambiar a español</button>
      {fromLanguage}
    </div>
  );
}

export default App;
