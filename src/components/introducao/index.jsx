import React, { useEffect, useRef } from "react";
import DNAComponent from "../heliceDna/DNAComponent";
import "./style.css";

export default function Introducao() {
  const dnaComponentRef = useRef(null);

  useEffect(() => {
    // Aguardar a renderização do componente DNAComponent
    const canvasElements = dnaComponentRef.current.querySelectorAll("canvas");

    if (canvasElements.length > 1) {
      // Hide the first canvas
      canvasElements[0].style.display = "none";
      // Show the second canvas
      canvasElements[1].style.display = "block";
    }
  }, []);

  return (
    <section
      className="inicio"
      id="inicio"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div
        className="content"
        style={{ flex: 1, padding: "20px", maxWidth: "50%" }}
      >
        <h3 className="titulo">Genética</h3>
        <p className="introducao">
          A Genética é o ramo da biologia que estuda a hereditariedade e a
          variação dos seres vivos. Ela investiga como as características são
          transmitidas dos pais para os filhos por meio dos genes, que são
          segmentos de DNA localizados nos cromossomos.
        </p>
      </div>
      <div id="canvaDNA" ref={dnaComponentRef}>
        <DNAComponent />
      </div>
    </section>
  );
}
