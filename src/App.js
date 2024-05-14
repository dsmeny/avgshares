import { useState, useMemo } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import { calcStockTransactions, calcAverages } from "./utils.js";
import "./App.css";

function App() {
  const [stockEntries, setStockEntries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [results, setResults] = useState(null);

  const averages = calcAverages(calcStockTransactions(stockEntries));

  useMemo(() => {
    setResults((prev) => {
      return {
        ...prev,
        three: {
          sharePrice: {
            positive:
              averages.averageCostPerShare * 0.03 +
              averages.averageCostPerShare,
            negative:
              averages.averageCostPerShare -
              averages.averageCostPerShare * 0.03,
          },
          costBasis: {
            positive: averages.totalShares * results.three.sharePrice.positive,
            negative: averages.totalShares * results.three.sharePrice.negative,
          },
        },
      };
    });
  }, [
    averages.averageCostPerShare,
    averages.totalShares,
    results.three.sharePrice.positive,
    results.three.sharePrice.negative,
  ]);

  function formSubmitHandler(formFields) {
    setStockEntries(formFields);

    if (isDisabled) {
      setIsDisabled((prev) => !prev);
    }
  }

  // console.log(results);
  // console.log(averages);

  return (
    <div className="container">
      <Form formSubmitHandler={formSubmitHandler} />
      {!isDisabled &&
        stockEntries[0].count > 0 &&
        stockEntries[0].price > 0 && (
          <Results averages={averages} results={results} />
        )}
    </div>
  );
}

export default App;
