import React from "react";

function ResultRow({ label, data, totalCost }) {
  const profitLoss = data.costBasis.positive - totalCost;

  return (
    <tr>
      <td>
        <strong>{label}</strong>
      </td>
      <td>
        <span className="results_positive">
          {data.sharePrice.positive.toFixed(2)}
        </span>
        /
        <span className="results_negative">
          {data.sharePrice.negative.toFixed(2)}
        </span>
      </td>
      <td>
        <span className="results_positive">
          {data.costBasis.positive.toFixed(2)}
        </span>
        /
        <span className="results_negative">
          {data.costBasis.negative.toFixed(2)}
        </span>
      </td>
      <td>
        <p>+/- ${Math.floor(profitLoss).toFixed(2)}</p>
      </td>
    </tr>
  );
}

function Results({ averages, results }) {
  const resultEntries = [
    { label: "3%", data: results[3] },
    { label: "7%", data: results[7] },
    { label: "13%", data: results[13] },
    { label: "21%", data: results[21] },
  ];

  return (
    <div className="results_container">
      <div className="results_totals">
        <div>
          <h4 className="results_totals_headers">Total Shares</h4>
          <p>{averages.totalShares}</p>
        </div>
        <div>
          <h4 className="results_totals_headers">Average Cost</h4>
          <p>
            $
            {averages.averageCostPerShare
              ? averages.averageCostPerShare.toFixed(2)
              : "0.00"}
          </p>
        </div>
        <div>
          <h4 className="results_totals_headers">Total Cost</h4>
          <p>${averages.totalCost.toFixed(2)}</p>
        </div>
      </div>
      <div className="results_percentages">
        <h3>Results</h3>
        <div>
          <table className="results_table">
            <thead>
              <tr className="results_table_headers">
                <th>Percentage</th>
                <th>Share Price</th>
                <th>Cost Basis</th>
                <th>P/L</th>
              </tr>
            </thead>
            <tbody>
              {resultEntries.map((entry) => (
                <ResultRow
                  key={entry.label}
                  label={entry.label}
                  data={entry.data}
                  totalCost={averages.totalCost}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
