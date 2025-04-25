import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const DNAComponent = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const dnaRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const initDNA = () => {
      if (!containerRef.current) {
        console.error(
          "containerRef.current está null - a div ainda não foi renderizada?"
        );
        setHasError(true);
        return;
      }

      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 7;

        // Verifica se o navegador suporta WebGL
        if (!THREE.WebGLRenderer) {
          console.error(
            "WebGLRenderer não está disponível - WebGL pode não ser suportado."
          );
          setHasError(true);
          return;
        }

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        if (!renderer) {
          console.error("Falha ao criar o renderer WebGL.");
          setHasError(true);
          return;
        }

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        if (!width || !height) {
          console.warn(
            "Largura ou altura do container é 0 - pode ser um problema de CSS."
          );
        }

        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);

        try {
          containerRef.current.appendChild(renderer.domElement);
        } catch (err) {
          console.error("Erro ao adicionar o canvas ao container:", err);
          setHasError(true);
          return;
        }

        rendererRef.current = renderer;
        sceneRef.current = scene;
        cameraRef.current = camera;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x00ffff, 1.5);
        pointLight.position.set(25, 50, 25);
        scene.add(pointLight);

        const colors = [0xff4ecd, 0x4ecbff, 0x82ff4e, 0xffdb4e];

        const createDNA = () => {
          const group = new THREE.Group();
          const radius = 0.4;
          const turns = 80;
          const spacing = 0.65;

          for (let i = 0; i < turns; i++) {
            const angle = i * 0.3;
            const geometry = new THREE.SphereGeometry(radius, 16, 16);

            const x1 = Math.sin(angle) * 3;
            const x2 = Math.sin(angle + Math.PI) * 3;
            const y = i * spacing;
            const z1 = Math.cos(angle) * 3;
            const z2 = Math.cos(angle + Math.PI) * 3;

            const color1 = new THREE.MeshStandardMaterial({
              color: colors[i % colors.length],
              emissive: 0x000000,
            });
            const color2 = new THREE.MeshStandardMaterial({
              color: colors[(i + 1) % colors.length],
              emissive: 0x000000,
            });

            const sphere1 = new THREE.Mesh(geometry, color1);
            sphere1.position.set(x1, y, z1);
            group.add(sphere1);

            const sphere2 = new THREE.Mesh(geometry, color2);
            sphere2.position.set(x2, y, z2);
            group.add(sphere2);

            const bridgeGeometry = new THREE.CylinderGeometry(0.05, 0.05, 6, 8);
            const bridgeMaterial = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              emissive: 0x00ffff,
            });
            const bridge = new THREE.Mesh(bridgeGeometry, bridgeMaterial);

            bridge.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
            bridge.lookAt(sphere2.position);
            bridge.rotateX(Math.PI / 2);
            group.add(bridge);
          }

          return group;
        };

        const dna = createDNA();
        if (!dna) {
          console.error("createDNA() retornou null ou undefined.");
          setHasError(true);
          return;
        }

        scene.add(dna);
        dna.scale.set(0.1, 0.1, 0.1);
        dnaRef.current = dna;

        const animate = () => {
          requestAnimationFrame(animate);
          if (dnaRef.current) {
            dnaRef.current.rotation.y += 0.008;
          }
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        };

        animate();

        const handleResize = () => {
          if (!containerRef.current) return;
          const width = containerRef.current.clientWidth;
          const height = containerRef.current.clientHeight;
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);

        setIsLoading(false);
        console.log("DNA 3D carregado com sucesso.");

        return () => {
          console.log("Limpando componente DNA...");
          scene.remove(dnaRef.current);
          rendererRef.current.dispose();
          window.removeEventListener("resize", handleResize);
        };
      } catch (err) {
        console.error("Erro inesperado ao inicializar a hélice 3D:", err);
        setHasError(true);
      }
    };

    initDNA();
  }, []);

  return (
    <div
      ref={containerRef}
      className="dna-render"
      style={{
        width: "600px",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      {isLoading && (
        <span style={{ color: "#aaa" }}>Carregando hélice de DNA...</span>
      )}
      {hasError && (
        <span style={{ color: "red", textAlign: "center" }}>
          Erro ao carregar a visualização 3D. Veja o console para mais detalhes.
        </span>
      )}
    </div>
  );
};

export default DNAComponent;
