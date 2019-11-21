function getMaxProfit(stockPrices) {

  // Calculate the max profit
  if (stockPrices.length < 2){
    throw new Error('nahhh')
  }
  
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];
  
  for (let i=1; i<stockPrices.length; i++){
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

//best purchase = cheapest price to purchase
//best sale = highest price to sell after 