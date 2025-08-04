import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <nav>
        <ul>
          <li>
            <Link to="/Home ">Início</Link>
          </li>
          <li>
            <Link to="/Projects">Projetos</Link>
          </li>
          <li>
            <Link to="/About">Sobre mim</Link>
          </li>
          <li>
            <Link to="/Contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
