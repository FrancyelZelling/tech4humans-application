import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Informations } from "../Informations/Informations";

const LeftPanel = () => {
  return (
    <section>
      <SearchBar />
      <Informations />
    </section>
  );
};

export default LeftPanel;
