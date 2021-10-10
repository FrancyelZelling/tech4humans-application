import React from "react";

import "./styles.css";

export const Informations = () => {
  return (
    <section className="information-container">
      <h1 className="city-name">Sales Oliveira</h1>
      <h3 className="state-country">São Paulo, Brasil</h3>

      <div className="card-container">
        <div className="card">
          <h2 className="card-title">Temperatura Atual</h2>
          <p className="card-info">34ºc</p>
        </div>

        <div className="card">
          <h2 className="card-title">Clima</h2>
          <p className="card-info">Nublado</p>
        </div>

        <div className="card">
          <h2 className="card-title">Umidade do ar</h2>
          <p className="card-info">70%</p>
        </div>
      </div>
    </section>
  );
};
