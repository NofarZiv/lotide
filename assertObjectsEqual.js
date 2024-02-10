const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject)