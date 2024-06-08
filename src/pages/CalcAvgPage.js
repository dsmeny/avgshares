import { useState, useMemo, useEffect } from "react";
import CalcForm from "../components/CalcForm";
import Results from "../components/Results.js";
import {
  calcStockTransactions,
  calcAverages,
  calcPositiveSharePrice,
  calcNegativeSharePrice,
} from "../utils/global";

function CalcAvgPage() {
  const [stockEntries, setStockEntries] = useState([]);
  const [results, setResults] = useState(null);

  const averages = useMemo(
    () => calcAverages(calcStockTransactions(stockEntries)),
    [stockEntries]
  );

  useEffect(() => {
    if (averages.totalShares > 0) {
      const percentages = [0.03, 0.07, 0.13, 0.21];
      const newResults = percentages.reduce((acc, percentage) => {
        const positiveSharePrice = calcPositiveSharePrice(averages, percentage);
        const negativeSharePrice = calcNegativeSharePrice(averages, percentage);

        acc[Math.round(percentage * 100)] = {
          sharePrice: {
            positive: positiveSharePrice,
            negative: negativeSharePrice,
          },
          costBasis: {
            positive: averages.totalShares * positiveSharePrice,
            negative: averages.totalShares * negativeSharePrice,
          },
        };

        return acc;
      }, {});

      setResults(newResults);
    }
  }, [averages]);

  function formSubmitHandler(formFields) {
    setStockEntries(formFields);
  }

  return (
    <div className="container calcavg-container">
      <h2>Stock Average Calculator</h2>
      <CalcForm formSubmitHandler={formSubmitHandler} />
      {results !== null && <Results averages={averages} results={results} />}
    </div>
  );
}

export default CalcAvgPage;
