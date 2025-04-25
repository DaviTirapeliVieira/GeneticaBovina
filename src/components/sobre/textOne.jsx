import { useEffect, useState } from "react";

export default function TextOne() {
  const [textoExibido, setTextoExibido] = useState("");
  const texto =
    "A  genética bovina é uma área da biologia que estuda a hereditariedade e a variação genética em bovinos, sendo fundamental para a melhoria das características produtivas, reprodutivas e adaptativas do gado. Através da seleção genética, é possível aprimorar características como o aumento da produção de leite, a qualidade da carne, a resistência a doenças, e a adaptação dos animais a diferentes ambientes.";
  const interval = 20;

  useEffect(() => {
    let index = 0;
    const typer = setInterval(() => {
      if (index < texto.length) {
        // Adiciona caractere atual
        setTextoExibido((prev) => prev + texto.charAt(index));
        index++;
      } else {
        clearInterval(typer);
      }
    }, interval);

    return () => clearInterval(typer); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <p id="text" style={{ whiteSpace: "pre-wrap" }}>
      {textoExibido}
    </p>
  );
}
