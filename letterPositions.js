const letterPositions = function(str) {
  let object = {};
  for (let key = 0; key < str.length; key++) {
    if (object[str[key]]) {
      object[str[key]].push(key);
    } else {
      object[str[key]] = [key];
    }
  
  }
  return object;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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



assertArraysEqual(letterPositions("hello").e, [1]);
