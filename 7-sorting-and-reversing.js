const prices = [10.99, 5.9, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjustedPrice: price * (1 + tax)};
    return priceObj;
});


// console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a,b) => {
//     if (a > b) {
//         return 1;
//     } else if (a===b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });

const sortedPrices = prices.sort((a,b) => { //arrange values inside the array (a - b) = (1st number - 2nd number)
    return a-b; //if the result is = positive number, it will swap the second with the first, if the result is negative it leavs them as it is 
});

console.log(sortedPrices);
console.log(sortedPrices.reverse()); //we can also reverse the array order
