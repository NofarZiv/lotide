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



module.exports = eqArrays;
