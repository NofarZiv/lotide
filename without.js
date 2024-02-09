const without = function(source, remove) { 
  let newArr = [];
  for (let y of source) {
      if (!remove.includes(y)) {
        newArr.push(y)
      }
  }
  return newArr;
};


const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++) {
      if (i === x && arr1[i] !== arr2[x]) {
        return false;
      }
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));



