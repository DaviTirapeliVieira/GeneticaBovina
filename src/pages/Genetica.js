// Tela principal
import Navbar from "../components/navbar";
import Introducao from "../components/introducao"
import Sobre from "../components/sobre/index.jsx"
import Explicacao from "../components/explicacao/explicacaoOne.jsx";
import Exemplares from "../components/exemplares/index.jsx";
import Footer from "../components/footer"

export default function Genetica() {
  return (
    <div>
      <Navbar/>
        <Introducao/>
        <Sobre/>
        <Explicacao/>
        <Exemplares/>
        <Footer/>
    </div>
    
  );
}
