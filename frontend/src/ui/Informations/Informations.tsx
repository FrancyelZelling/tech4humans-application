import React from "react";
import { SearchCityResponse } from "../../services/api";

import "./styles.css";

interface InformationsProps {
  city: SearchCityResponse;
}

export const Informations: React.FC<InformationsProps> = ({ city }) => {
  return (
    <section className="information-container">
      <h1 className="city-name">{city.name}</h1>

      <div className="card-container">
        <div className="card">
          <h2 className="card-title">Temperatura Atual</h2>
          <p className="card-info">{city.main.temp}ºC</p>
        </div>

        <div className="card">
          <h2 className="card-title">Clima</h2>
          <p className="card-info">{city.weather[0].description}</p>
        </div>

        <div className="card">
          <h2 className="card-title">Umidade do ar</h2>
          <p className="card-info">{city.main.humidity}%</p>
        </div>
      </div>
    </section>
  );
};
