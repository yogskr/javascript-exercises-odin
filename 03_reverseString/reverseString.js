const reverseString = function (str) {
  const splitArr = str.split('');
  return splitArr.reverse().join('');
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
