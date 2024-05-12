export function onFormSubmit(e, formSubmitHandler) {
  e.preventDefault();

  const entries = [];

  const elements = Array.from(
    e.target.elements,
    (element) => element && element.value
  ).filter((el) => el);

  for (let i = 0; i < elements.length; i += 2) {
    const shares = elements[i];
    const price = elements[i + 1];

    if (shares && price) {
      entries.push({
        price: parseFloat(price),
        count: parseFloat(shares),
      });
    }
  }

  formSubmitHandler(entries);
  return entries;
}

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
