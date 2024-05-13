import React from "react";

function Results({ averages, results }) {
  const { three } = results;
  return (
    <div className="results_container">
      <div className="results_totals">
        <div>
          <h3>Total Shares</h3>
          <p>{averages.totalShares}</p>
        </div>
        <div>
          <h3>Average Cost</h3>
          <p>
            $
            {averages.averageCostPerShare
              ? averages.averageCostPerShare.toFixed(2)
              : `0.00`}
          </p>
        </div>
        <div>
          <h3>Total Cost</h3>
          <p>${averages.totalCost.toFixed(2)}</p>
        </div>
      </div>
      <div className="results_percentages">
        <h3>Results</h3>
        <div>
          <table className="results_table">
            <tr className="results_table_headers">
              <th>Percentage</th>
              <th>Share Price</th>
              <th>Cost Basis</th>
              <th>P/L</th>
            </tr>
            <tr>
              <td>
                <strong>3%</strong>
              </td>
              <td>
                <span className="results_positive">
                  {three.sharePrice.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {three.sharePrice.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <span className="results_positive">$906.00 </span>/
                <span className="results_negative"> $852.00</span>
              </td>
              <td>
                <p>+/- $28.00</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>7%</strong>
              </td>
              <td>
                <span className="results_positive">4.53 </span>/
                <span className="results_negative"> 4.26</span>
              </td>
              <td>
                <span className="results_positive">$906.00 </span>/
                <span className="results_negative"> $852.00</span>
              </td>
              <td>
                <p>+/- $28.00</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>13%</strong>
              </td>
              <td>
                <span className="results_positive">4.53 </span>/
                <span className="results_negative"> 4.26</span>
              </td>
              <td>
                <span className="results_positive">$906.00 </span>/
                <span className="results_negative"> $852.00</span>
              </td>
              <td>
                <p>+/- $28.00</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>21%</strong>
              </td>
              <td>
                <span className="results_positive">4.53 </span>/
                <span className="results_negative"> 4.26</span>
              </td>
              <td>
                <span className="results_positive">$906.00 </span>/
                <span className="results_negative"> $852.00</span>
              </td>
              <td>
                <p>+/- $28.00</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
