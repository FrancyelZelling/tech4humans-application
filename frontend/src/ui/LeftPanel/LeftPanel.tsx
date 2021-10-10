import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Informations } from "../Informations/Informations";

import "./styles.css";

const LeftPanel = () => {
  return (
    <section className="container">
      <SearchBar />
      <Informations />
    </section>
  );
};

export default LeftPanel;
