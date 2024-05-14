import React from "react";

function Results({ averages, results }) {
  const { three, seven, thirteen, twentyone } = results;
  const profitLoss_03 = three.costBasis.positive - averages.totalCost;
  const profitLoss_07 = seven.costBasis.positive - averages.totalCost;
  const profitLoss_13 = thirteen.costBasis.positive - averages.totalCost;
  const profitLoss_21 = twentyone.costBasis.positive - averages.totalCost;
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
                <span className="results_positive">
                  {three.costBasis.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {three.costBasis.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <p>+/- ${Math.floor(profitLoss_03).toFixed(2)}</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>7%</strong>
              </td>
              <td>
                <span className="results_positive">
                  {seven.sharePrice.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {seven.sharePrice.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <span className="results_positive">
                  {seven.costBasis.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {seven.costBasis.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <p>+/- ${Math.floor(profitLoss_07).toFixed(2)}</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>13%</strong>
              </td>
              <td>
                <span className="results_positive">
                  {thirteen.sharePrice.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {thirteen.sharePrice.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <span className="results_positive">
                  {thirteen.costBasis.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {thirteen.costBasis.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <p>+/- ${Math.floor(profitLoss_13).toFixed(2)}</p>
              </td>
            </tr>
            <tr>
              <td>
                <strong>21%</strong>
              </td>
              <td>
                <span className="results_positive">
                  {twentyone.sharePrice.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {twentyone.sharePrice.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <span className="results_positive">
                  {twentyone.costBasis.positive.toFixed(2)}
                </span>
                /
                <span className="results_negative">
                  {twentyone.costBasis.negative.toFixed(2)}
                </span>
              </td>
              <td>
                <p>+/- ${Math.floor(profitLoss_21).toFixed(2)}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
