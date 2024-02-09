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

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));
console.log(middle([1, 2]));