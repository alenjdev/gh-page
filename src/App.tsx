import { useEffect } from "react";
import "./App.css";
import { config } from "./config";

function App() {
  useEffect(() => {
    console.log("", import.meta.env.VITE_STAGE);
  }, []);
  return (
    <>
      {config.outputFolder || "NONe"}
      <br></br>
      {import.meta.env.VITE_STAGE || "undefined"}
    </>
  );
}

export default App;
