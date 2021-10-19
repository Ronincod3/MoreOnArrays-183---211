const prices = [10.99, 5.9, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
  return priceObj;
});

const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6
});

console.log(taxAdjustedPrices);
console.log(filteredArray);
