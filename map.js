const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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


const words = ["ground", "control", "to", "major", "tom"];
let res = map(words, function(word) {
  return word + "hey"
});

assertArraysEqual(res, ["groundhey", "controlhey", "tohey", "majorhey", "tomhey"]);

let res1 = map(words, function(word) {
  return word.toUpperCase();
});
assertArraysEqual(res1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

let res2 = map(words, function(word) {
  return 1 + word;
});
assertArraysEqual(res2, ["1ground", "1control", "1to", "1major", "1tom"]);