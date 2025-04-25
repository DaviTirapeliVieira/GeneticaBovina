import { useEffect, useState } from "react";

export default function TextTwo() {
  const [textoExibido, setTextoExibido] = useState("");
  const texto =
    "A  genética bovina de leite busca melhorar a produção e a qualidade do leite. Para isso, são escolhidas vacas com bom desempenho leiteiro e resistência a doenças, como a mastite. Essas características são passadas para os filhos por meio de técnicas como a inseminação artificial e a seleção genômica. Também são avaliados os touros, que precisam ter genes que aumentem a produtividade do rebanho. O resultado é um rebanho mais eficiente, que produz mais leite com melhor qualidade, e vacas com maior vida produtiva.";
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
