import React from "react";
import "./styles.css";
import HistoryCard from "../HistoryCard/HistoryCard";
import { ApiCityInterface } from "../../services/store";

interface historyComponentProps {
  title: string;
  lastSearched: boolean;
  cities: ApiCityInterface[];
}

const HistoryComponent: React.FC<historyComponentProps> = ({
  title,
  lastSearched,
  cities,
}) => {
  return (
    <section className="history-component">
      <h2 className="history-title">Top 5 Cidades Pesquisadas</h2>
      <div className="history-card-container">
        {cities.map((item: ApiCityInterface) => (
          <HistoryCard city={item} lastSearched={lastSearched} />
        ))}
      </div>
    </section>
  );
};

export default HistoryComponent;
