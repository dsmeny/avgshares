export function calcStockTransactions(transactions) {
  return transactions.map(({ price, count }) => {
    return {
      price,
      count,
      cost: price * count,
    };
  });
}

export function calcAverages(books) {
  const obj = {
    totalShares: 0,
    totalCost: 0,
    averageCostPerShare: 0,
  };

  books.forEach(({ price, count, cost }) => {
    obj.totalShares += count;
    obj.totalCost += cost;
  });

  obj.averageCostPerShare = Number(
    (obj.totalCost / obj.totalShares).toFixed(4)
  );

  return obj;
}
