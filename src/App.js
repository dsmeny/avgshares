import { useState } from "react";
import Form from "./components/Form";
import { calcStockTransactions, calcAverages } from "./utils.js";
import "./App.css";

function Results({ averages }) {
  return (
    <div className="results_container">
      <div>
        <h3>Total Shares</h3>
        <p>{averages.totalShares}</p>
      </div>
      <div>
        <h3>Average Cost</h3>
        <p>
          $
          {averages.averageCostPerShare ? averages.averageCostPerShare : `0.00`}
        </p>
      </div>
      <div>
        <h3>Total Cost</h3>
        <p>${averages.totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
}

function App() {
  const [stockEntries, setStockEntries] = useState([]);
  const averages = calcAverages(calcStockTransactions(stockEntries));

  function formSubmitHandler(formFields) {
    setStockEntries(formFields);
  }

  return (
    <div className="container">
      <Form formSubmitHandler={formSubmitHandler} />
      {stockEntries && stockEntries.length > 0 && (
        <Results averages={averages} />
      )}
    </div>
  );
}

export default App;
