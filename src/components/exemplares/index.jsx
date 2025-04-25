import "./style.css";

export default function Exemplares() {
  return (
    <div>
      <section id="exemplares" className="exemplares">
        <h2 className="section-title">Reprodutores</h2>
        <div class="box-container">
          <div class="box">
            <img
              src="./brangus.jpg"
              alt="Touro Brangus"
              className="gallery-img"
            />
            <div class="content">
              <h3>Touro Brangus</h3>
            </div>
          </div>

          <div class="box">
            <img
              src="./nelore.jpg"
              alt="Touro Nelore"
              className="gallery-img"
            />
            <div class="content">
              <h3>Touro Nelore</h3>
            </div>
          </div>

          <div class="box">
            <img
              src="./nelore-pintado.jpg"
              alt="Touro Nelore Pintado"
              className="gallery-img"
            />
            <div class="content">
              <h3>Touro Nelore Pintado</h3>
            </div>
          </div>

          <div class="box">
            <img
              src="./senepol.png"
              alt="Touro Senepol"
              className="gallery-img"
            />
            <div class="content">
              <h3>Touro Senepol</h3>
            </div>
          </div>

          <div class="box">
            <img
              src="./girolando.jpg"
              alt="Touro Girolando"
              className="gallery-img"
            />
            <div class="content">
              <h3>Touro Girolando</h3>
            </div>
          </div>

          <div class="box">
            <img
              src="./marquejane.jpg"
              alt="Touro Marquejane"
              className="gallery-img"
            />
            <div class="content">
              <h3>Touro Marquejane</h3>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
