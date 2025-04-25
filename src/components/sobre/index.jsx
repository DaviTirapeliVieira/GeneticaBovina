// Sobre
import BullModel from "./bull";
import TextOne from "./textOne";
import "./style.css";

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="text-with-image">
        <div className="image-container">
          <BullModel />
        </div>
        <div className="text">
          <TextOne />
        </div>
      </div>
    </section>
  );
}
