const prices = [10.99, 5.9, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// normal for loops
// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// };


//loops with forEach (optional)
prices.forEach((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjustedPrice: price * (1 + tax)};
    taxAdjustedPrices.push(priceObj);
});


console.log(taxAdjustedPrices);

