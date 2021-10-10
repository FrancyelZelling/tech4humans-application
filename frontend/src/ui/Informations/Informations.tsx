import React from "react";

export const Informations = () => {
  return (
    <section>
      <h1>Sales Oliveira</h1>
      <h3>São Paulo, Brasil</h3>

      <div className="tempCard">
        <h2>Temperatura Atual</h2>
        <p>34ºc</p>
      </div>

      <div className="wheaterCard">
        <h2>Clima</h2>
        <p>Nublado</p>
      </div>

      <div className="humidityCard">
        <h2>Humidade</h2>
        <p>70%</p>
      </div>
    </section>
  );
};
