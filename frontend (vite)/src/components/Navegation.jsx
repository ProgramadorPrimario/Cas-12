import { Link } from "react-router-dom";
import "./Navegation.css";

function Navegation() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><Cas-12></Cas-12></Link>
      
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/About">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navegation;