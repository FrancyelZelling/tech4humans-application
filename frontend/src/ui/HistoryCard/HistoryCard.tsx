import React from "react";
import "./styles.css";

const HistoryCard = () => {
  return (
    <section id="history-card">
      <div className="info-section">
        <h3 className="city-name">Sales Oliveira</h3>
        <p className="info-search">12 Buscas</p>
      </div>

      <div className="details-section">
        <p className="history-temp">34ºc</p>
        <p className="history-wheather">Nublado</p>
        <div className="history-humidity">
          <p>70%</p>
        </div>
      </div>
    </section>
  );
};

export default HistoryCard;
