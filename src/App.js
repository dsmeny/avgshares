import { useState, useMemo, useEffect } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import {
  calcStockTransactions,
  calcAverages,
  calcPositiveSharePrice,
  calcNegativeSharePrice,
} from "./utils.js";
import "./App.css";

function App() {
  const [stockEntries, setStockEntries] = useState([]);

  const [results, setResults] = useState(null);

  const averages = useMemo(() => {
    return calcAverages(calcStockTransactions(stockEntries));
  }, [stockEntries]);

  useEffect(() => {
    if (averages.totalShares > 0) {
      const positiveSharePrice_03 = calcPositiveSharePrice(averages, 0.03);
      const negativeSharePrice_03 = calcNegativeSharePrice(averages, 0.03);

      const positiveSharePrice_07 = calcPositiveSharePrice(averages, 0.07);
      const negativeSharePrice_07 = calcNegativeSharePrice(averages, 0.07);

      const positiveSharePrice_13 = calcPositiveSharePrice(averages, 0.13);
      const negativeSharePrice_13 = calcNegativeSharePrice(averages, 0.13);

      const positiveSharePrice_21 = calcPositiveSharePrice(averages, 0.21);
      const negativeSharePrice_21 = calcNegativeSharePrice(averages, 0.21);

      setResults((prev) => {
        return {
          ...prev,
          three: {
            sharePrice: {
              positive: positiveSharePrice_03,
              negative: negativeSharePrice_03,
            },
            costBasis: {
              positive: averages.totalShares * positiveSharePrice_03,
              negative: averages.totalShares * negativeSharePrice_03,
            },
          },
          seven: {
            sharePrice: {
              positive: positiveSharePrice_07,
              negative: negativeSharePrice_07,
            },
            costBasis: {
              positive: averages.totalShares * positiveSharePrice_07,
              negative: averages.totalShares * negativeSharePrice_07,
            },
          },
          thirteen: {
            sharePrice: {
              positive: positiveSharePrice_13,
              negative: negativeSharePrice_13,
            },
            costBasis: {
              positive: averages.totalShares * positiveSharePrice_13,
              negative: averages.totalShares * negativeSharePrice_13,
            },
          },
          twentyone: {
            sharePrice: {
              positive: positiveSharePrice_21,
              negative: negativeSharePrice_21,
            },
            costBasis: {
              positive: averages.totalShares * positiveSharePrice_21,
              negative: averages.totalShares * negativeSharePrice_21,
            },
          },
        };
      });
    }
  }, [averages]);

  function formSubmitHandler(formFields) {
    setStockEntries(formFields);
  }

  return (
    <div className="container">
      <Form formSubmitHandler={formSubmitHandler} />
      {results !== null && <Results averages={averages} results={results} />}
    </div>
  );
}

export default App;
