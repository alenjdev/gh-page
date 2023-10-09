import "./App.css";
import { config } from "./config";

function App() {
  return (
    <>
      {config.outputFolder || "NONe"}
      <br></br>
      {import.meta.env.VITE_STAGE || "undefined"}
    </>
  );
}

export default App;
