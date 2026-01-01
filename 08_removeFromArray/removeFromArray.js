const removeFromArray = function(array, ...nums) {
  let reducedArray = [];
  array.forEach( (element) => {
    if (!nums.includes(element) ) reducedArray.push(element);})
  return reducedArray;
};

console.log(removeFromArray([1,2,3,4], 3, 2));


// Do not edit below this line
// Pseudocode:
// function-arguments are received as a parameter
// IF element in array is equal to nums at index i
// delete element at index i
// return array


module.exports = removeFromArray;
