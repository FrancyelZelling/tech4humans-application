import React, { useEffect } from "react";
import "./styles.css";
import HistoryComponent from "../HistoryComponent/HistoryComponent";
import { useStore } from "../../services/store";
import { topFiveCities, lastSearchedCities } from "../../services/api";

const RightPanel = () => {
  const { apiCity, last, setApiCity, setLast } = useStore();

  useEffect(() => {
    const getCities = async () => {
      const response = await topFiveCities();
      setApiCity(response);
    };

    const getLast = async () => {
      const response = await lastSearchedCities();
      console.log(response);
      setLast(response);
    };

    getCities();
    getLast();
  }, []);

  return (
    <section className="right-panel-container">
      {apiCity === undefined ? (
        <h2>Loading data</h2>
      ) : (
        <HistoryComponent
          title="Top 5 Cidades Buscadas"
          lastSearched={false}
          cities={apiCity}
        />
      )}
      {last === undefined ? (
        <h2>Loading data</h2>
      ) : (
        <HistoryComponent
          title="Top 5 Cidades Buscadas"
          lastSearched={true}
          cities={last}
        />
      )}
    </section>
  );
};

export default RightPanel;
