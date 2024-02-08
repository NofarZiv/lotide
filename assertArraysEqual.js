const assertArraysEqual = function(ar, ar1, str) {
  if (eqArrays(ar, ar1) === str) {
    return `✅✅✅ Assertion Passed: ${eqArrays(ar, ar1)} === ${str}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${eqArrays(ar, ar1)} !== ${str}`;

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



console.log(assertArraysEqual([1, 2, 3], [1, 2, 3], true));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1], false));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false));
