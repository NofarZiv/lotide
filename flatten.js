const flatten = function(arr) {
  let arr1 = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let x of i) {
        arr1.push(x);
      }
    } else {
      arr1.push(i);
    }
  }
  return arr1;

};




module.exports = flatten;