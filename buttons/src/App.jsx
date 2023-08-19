import "./normalize.css";
import "./App.css";
import { Main, Footer } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Main/>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
