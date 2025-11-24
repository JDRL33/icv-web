import "./App.css";
import Home from "./pages/home";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Home />
    </HelmetProvider>
  );
}

export default App;
