const sumAll = function(num1, num2) {
  let tmp;
  if (num1 > num2) {
    // we save the bigger num in tmp
    tmp = num1;
    // smaller number goes in num1
    num1 = num2;
    // bigger number(tmp) goes in num2
    num2 = tmp;
  }
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if ( ( Number.isInteger(num1) && Number.isInteger(num2) ) === false ) return 'ERROR';
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(5, "7"));

// Do not edit below this line
module.exports = sumAll;
