import React from "react";

function ResultsTable() {
  return (
    <div className="results_percentages_container">
      <div className="results_percentages_container_cols">
        <h4>3%</h4>
        <div>
          <p>
            <span style={{ color: "green" }}>4.53 </span>/
            <span style={{ color: "red" }}> 4.26</span>
          </p>
        </div>
      </div>
      <div className="results_percentages_container_cols">
        <h4>7%</h4>
        <div>
          <p>
            <span style={{ color: "green" }}>+4.70 </span>/
            <span style={{ color: "red" }}>-4.09</span>
          </p>
        </div>
      </div>
      <div className="results_percentages_container_cols">
        <h4>12%</h4>
        <div>
          <p>
            <span style={{ color: "green" }}>+4.92 </span>/
            <span style={{ color: "red" }}>-3.87</span>
          </p>
        </div>
      </div>
      <div className="results_percentages_container_cols">
        <h4>21%</h4>
        <div>
          <p>
            <span style={{ color: "green" }}>+5.32 </span>/
            <span style={{ color: "red" }}>-3.47</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsTable;
