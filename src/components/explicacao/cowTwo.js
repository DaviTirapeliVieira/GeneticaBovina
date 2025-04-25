import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Correção da importação do GLTFLoader

const CowTwoModel = () => {
  const containerRef = useRef(null); // Referência ao container onde o modelo será renderizado

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Aguardar até que o container tenha tamanho
    const width = container.clientWidth || 500; // Defina uma largura padrão se necessário
    const height = container.clientHeight || 500; // Defina uma altura padrão se necessário

    // Cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3; // Posição da câmera

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement); // Adiciona o renderizador ao container

    // Luz ambiente e direcional
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    // Loader GLTF
    const loader = new GLTFLoader();

    // Caminho do arquivo .glb (usando a pasta public)
    const modelPath = process.env.PUBLIC_URL + "/cow_idle.glb"; // Caminho para a pasta public

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // Escala inicial
        model.scale.set(1.5, 1.5, 1.5);
        scene.add(model);

        // Centraliza o modelo automaticamente na cena
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center); // Move para (0, 0, 0)
        model.position.y = 1;

        model.rotation.y = Math.PI / 2;

        // Ajusta a câmera para enquadrar o modelo
        const size = box.getSize(new THREE.Vector3()).length();
        const distance = size * 1.7;
        camera.position.z = distance; // Ajusta a posição da câmera com base no modelo

        // Criação do AnimationMixer para controlar animações
        const mixer = new THREE.AnimationMixer(model);

        // Verifique se o modelo possui animações
        if (gltf.animations && gltf.animations.length) {
          gltf.animations.forEach((clip) => {
            // Adiciona todas as animações ao mixer
            mixer.clipAction(clip).play();
          });
        }

        // Loop de animação
        const animate = () => {
          requestAnimationFrame(animate);

          // Atualiza o mixer para rodar as animações
          if (mixer) mixer.update(0.01); // Ajuste a velocidade se necessário

          // Renderiza a cena
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error("Erro ao carregar o modelo:", error);
      }
    );

    // Função de limpeza para evitar vazamentos de memória ao desmontar o componente
    return () => {
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // O useEffect só executa uma vez ao montar o componente

  return (
    <div
      ref={containerRef}
      style={{ width: "600px", height: "500px" }} // Definindo tamanho fixo visível
      id="cow"
    />
  );
};

export default CowTwoModel;
