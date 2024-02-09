const countLetters = function(str) {
  let object = {};
  for (let key of str) {
    if (key !== " ") {
      if (object[key]) {
        object[key] += 1
      } else {
        object[key] = 1;
      }
      
    }
   
  }
  return object;

};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


let y = {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,};
let result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
