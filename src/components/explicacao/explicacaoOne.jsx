// Explicação One
import CowModel from "./cow";
import CowTwoModel from "./cowTwo";
import TextTwo from "./textTwo";
import TextThree from "./textThree";
import "./style.css";

export default function Explicacao() {
  return (
    <section id="explicacao">
      <div className="text-with-image-two">
        <div className="image-container-two">
          <CowModel />
        </div>
        <div className="text-two">
          <TextTwo />
        </div>
      </div>
      <div className="text-with-image-three">
        <div className="image-container-three">
          <CowTwoModel />
        </div>
        <div className="text-three">
          <TextThree />
        </div>
      </div>
      <div className="text-with-image-four">
        <div className="image-container-four">
          <video className="video-player" controls autoPlay={false}>
            <source src="/video_descritivo.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
        <div className="text-video">
          <div className="text-four">
          Nesse vídeo destacaremos a importância da genética bovina na otimização da produção de leite e carne. Explicaremos como características genéticas específicas podem melhorar o desempenho dos rebanhos, resultando em maior produtividade, melhor qualidade nutricional e aprimoramento das propriedades sensoriais do leite e da carne.
          </div>
        </div>
      </div>
    </section>
  );
}
