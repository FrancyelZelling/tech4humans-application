import React from "react";
import "./styles.css";
import HistoryCard from "../HistoryCard/HistoryCard";

const HistoryComponent = () => {
  return (
    <section className="history-component">
      <h2 className="history-title">Top 5 Cidades Pesquisadas</h2>
      <div className="history-card-container">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </section>
  );
};

export default HistoryComponent;
