//Bad solution

// var maxProfit = function (prices) {
//   if (prices.length < 2) return 0;
//   let maxPft = 0;
//   function innerFunction(buyAt, sellAtArr) {
//     let maxSellingPrice = Math.max(...sellAtArr);
//     let currentMaxPft = maxSellingPrice - buyAt;
//     if (
//       (sellAtArr.length && maxSellingPrice > buyAt && maxPft == 0) ||
//       (maxSellingPrice > buyAt && maxPft > 0 && maxPft < currentMaxPft)
//     ) {
//       maxPft = currentMaxPft;
//     }
//     if (sellAtArr && Array.isArray(sellAtArr) && sellAtArr.length) {
//       let firstArg = sellAtArr[0];
//       sellAtArr.splice(0, 1);
//       return innerFunction(firstArg, sellAtArr);
//     } else {
//       return maxPft;
//     }
//   }

//   let firstarg = prices[0];
//   prices.splice(0, 1);
//   let ans = innerFunction(firstarg, prices);
//   return ans;
// };

//Good solution

var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let currentMax = 0;
  let max = 0;

  for(let i=0; i < prices.length - 1; i++) {
        currentMax = Math.max(0, currentMax + (prices[i+1] - prices[i]));
        max = Math.max(0, currentMax, max);
  }

  return max;
};

console.log(maxProfit([7,1,5,3,6,4]));