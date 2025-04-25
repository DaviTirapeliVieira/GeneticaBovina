// Navbar
import "./style.css"

export default function Navbar() {
  return (
    <header className="header">
      <a href="/" className="logo">
        Genetica Bovina
      </a>
      <ul className="navbar">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#explicacao">Explicação</a></li>
        <li><a href="#exemplares">Exemplares</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </header>
  );
}
