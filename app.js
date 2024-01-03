// This is just static data for illustration.
// In real application you should fetch this data from an API like CoinGecko or CoinMarketCap.

const cryptos = [
  { name:'Bitcoin', symbol:'BTC', price:'$37,516.00', change:'-0.75%' },
  // ... add other cryptocurrencies here
];

cryptos.forEach(crypto => {
  const priceElement = document.getElementById(`${crypto.symbol.toLowerCase()}-price`);
  const changeElement = document.getElementById(`${crypto.symbol.toLowerCase()}-change`);

  if(priceElement && changeElement) {
     priceElement.textContent = crypto.price;
     changeElement.textContent = crypto.change;

     // Change text color based on positive or negative change
     if(crypto.change.startsWith('-')) {
        changeElement.style.color = 'red';
     } else {
        changeElement.style.color = 'green';
     }
  }
});
