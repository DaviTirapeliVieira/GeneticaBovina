import { useEffect, useState } from "react";

export default function TextThree() {
  const [textoExibido, setTextoExibido] = useState("");
  const texto =
    "A  genética bovina de corte, o objetivo é melhorar o ganho de peso e a qualidade da carne. Selecionam-se animais com bom desenvolvimento muscular, crescimento rápido e boa conversão alimentar. É comum o cruzamento de raças europeias, que produzem carne de melhor qualidade, com raças zebuínas, que são mais adaptadas ao clima. Técnicas como inseminação artificial e testes de desempenho são muito usadas.";
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
