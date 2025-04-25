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
          <TextTwo/>
        </div>
      </div>
      <div className="text-with-image-three">
        <div className="image-container-three">
          <CowTwoModel/>
        </div>
        <div className="text-three">
          <TextThree/>
        </div>
      </div>
    </section>
  );
}
