import React from "react";
import "./styles.css";
import HistoryComponent from "../HistoryComponent/HistoryComponent";

const RightPanel = () => {
  return (
    <section className="right-panel-container">
      <HistoryComponent />
      <HistoryComponent />
    </section>
  );
};

export default RightPanel;
