const prices = [10.99, 5.9, 3.99, 6.59];
const tax = 0.19;

//with foreach
let sum1 = 0;
prices.forEach((price) => {
  sum1 += price;
});

// with reduce
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(`this is the old style type of sum result ${sum1}`);
console.log(`new type of sum result ${sum}`);
