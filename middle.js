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
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle  = function(arr) {
  let newArr = [];
  let length = arr.length
  let index = (length / 2) - 1 
  if (length > 2) {
    if (length % 2 !== 0) {
      let num = Math.ceil(index);
      newArr.push(arr[num]);
    } else if (length % 2 === 0) {
      newArr.push(arr[index]);
      newArr.push(arr[index + 1]);
    }
    return newArr;
  }
  return newArr;
};


let result = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(result, [3, 4]);