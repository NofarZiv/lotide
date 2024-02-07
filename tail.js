const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};



console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail([1]));
console.log(tail([]));
