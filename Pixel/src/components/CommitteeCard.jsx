import React from "react";
import "./Card.css";

export default function Commitiee() {
  return (
    <div className="container">
      <div className="commitiee-card card">
        <div className="card-image"></div>
        <div className="card-content">
          <h2 className="commitiee-title">{CommitteeData.name}</h2>
          <h2 className="commitiee-branch">{CommitteeData.branch}</h2>{" "}
        </div>
      </div>
    </div>
  );
}