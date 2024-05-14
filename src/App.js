import { useState, useMemo, useEffect } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import { calcStockTransactions, calcAverages } from "./utils.js";
import "./App.css";

function App() {
  const [stockEntries, setStockEntries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [results, setResults] = useState(null);

  const averages = useMemo(() => {
    return calcAverages(calcStockTransactions(stockEntries));
  }, [stockEntries]);

  // useEffect(() => {
  //   const positiveSharePrice_03 =
  //     averages.averageCostPerShare * 0.03 + averages.averageCostPerShare;
  //   const negativeSharePrice_03 =
  //     averages.averageCostPerShare - averages.averageCostPerShare * 0.03;

  //   if (averages.totalShares > 0) {
  //     setResults((prev) => {
  //       return {
  //         ...prev,
  //         three: {
  //           sharePrice: {
  //             positive: positiveSharePrice_03,
  //             negative: negativeSharePrice_03,
  //           },
  //           costBasis: {
  //             positive: averages.totalShares * positiveSharePrice_03,
  //             negative: averages.totalShares * negativeSharePrice_03,
  //           },
  //         },
  //       };
  //     });
  //   }
  // }, [averages, results]);

  function formSubmitHandler(formFields) {
    setStockEntries(formFields);

    if (isDisabled) {
      setIsDisabled((prev) => !prev);
    }
  }

  return (
    <div className="container">
      <Form formSubmitHandler={formSubmitHandler} />
      {!isDisabled &&
        stockEntries.length > 0 &&
        stockEntries[0].count > 0 &&
        stockEntries[0].price > 0 && (
          <Results averages={averages} results={results} />
        )}
    </div>
  );
}

export default App;
