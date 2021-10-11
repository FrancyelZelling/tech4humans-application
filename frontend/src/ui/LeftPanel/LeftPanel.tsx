import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Informations } from "../Informations/Informations";
import { useStore } from "../../services/store";

import "./styles.css";

const LeftPanel = () => {
  const { loading, city } = useStore();

  return (
    <section className="container">
      <SearchBar />

      {city !== undefined && loading === false ? (
        <Informations city={city} />
      ) : (
        <h2></h2>
      )}
    </section>
  );
};

export default LeftPanel;
