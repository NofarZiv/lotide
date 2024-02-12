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




module.exports = middle;