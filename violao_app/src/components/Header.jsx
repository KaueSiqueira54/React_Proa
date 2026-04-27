import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Quem somos</Link>
        <Link to="/Section_Dois">Instrumentos</Link>
        <Link to="/Section_Tres">Endereço</Link>
        <Link to="Section_Quatro">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
