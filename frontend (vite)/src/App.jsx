import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navegation"; // revisa si se escribe Navigation
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About"; // <- era About, no Mapa

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* TIENE QUE IR ADENTRO */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;