import React, { useState } from "react";
import "./style.css";
import exemplaresData from "./exemplares.json"; // Supondo que o arquivo JSON esteja na mesma pasta

export default function Exemplares() {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <section id="exemplares" className="exemplares">
        <h2 className="section-title">Reprodutores</h2>
        <div className="box-container">
          {exemplaresData.map((exemplar) => (
            <div
              key={exemplar.id}
              className="box"
              onClick={() => openModal(exemplar)}
            >
              <img
                src={exemplar.image}
                alt={exemplar.name}
                className="gallery-img"
              />
              <div className="content">
                <h3>{exemplar.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {modalData && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>{modalData.name}</h2>
              <img
                src={modalData.image}
                alt={modalData.name}
                className="modal-img"
              />
              <p>
                <strong>Raça:</strong>  {modalData.breed}
              </p>
              <p>
                <strong>Origem:</strong>  {modalData.origin}
              </p>
              <p>
                {modalData.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
