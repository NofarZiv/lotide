
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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects  = function(obj1, obj2) {
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if ((obj1[key1].isArray === obj2[key2].isArray)) {
        if (obj1[key1] !== obj2[key2]) {
          if (arr1.length !== arr2.length) {
            return false
          }
        }
      } else {
        if (!(eqArrays(obj1[key1], obj2[key2]))) {
          return false
        }
      }
    }
  }
  return true;
};





const multiColorShirtObject = { color: "red", size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
let result = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); 

assertEqual(result, false);
