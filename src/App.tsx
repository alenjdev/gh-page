import "./App.css";
import { config } from "./config";

function App() {
  return (
    <>
      {config.outputFolder}
      <br></br>
      {import.meta.env.VITE_STAGE || "undefined"}
    </>
  );
}

export default App;
