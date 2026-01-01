const reverseString = function(string) {
  let reversed = "";
  const stringIndexLastLetter = string.length - 1;
  for (let i=stringIndexLastLetter; i>=0; i--) {
    reversed += string.charAt(i);
  }
  return reversed;
};

console.log(reverseString("hello"));

// Pseudocode:
// create a new empty string
// FOR the length of the input-string, beginning from the last letter, as long as the first letter hasn't been reached, counting backwards
// append the current letter to the new string
// return the string

// Do not edit below this line
module.exports = reverseString;
