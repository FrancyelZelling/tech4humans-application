import React from "react";
import "./styles.css";
import { ApiCityInterface } from "../../services/store";

interface HistoryCardInterface {
  city: ApiCityInterface;
  lastSearched: boolean;
}

const HistoryCard: React.FC<HistoryCardInterface> = ({
  city,
  lastSearched,
}) => {
  const parsedDate = new Date(city.last_searched);
  const formatedDate = parsedDate.toLocaleString("en-GB");

  return (
    <section id="history-card">
      <div className="info-section">
        <h3 className="city-name">{city.city_name}</h3>
        <p className="info-search">
          {lastSearched === false ? city.searched + " vezes" : formatedDate}
        </p>
      </div>
    </section>
  );
};

export default HistoryCard;
