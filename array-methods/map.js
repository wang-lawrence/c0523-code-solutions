const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObj = prices.map( e => ({price: e, salePrice: e/2}));

const priceArr = prices.map( e => `$${e}`);

console.log('Price objects', priceObj);
console.log('Formatted prices', priceArr);
