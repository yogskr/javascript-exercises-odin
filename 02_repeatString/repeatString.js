const repeatString = function (string, num) {
  let stringContainer = [];
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      stringContainer.push(string);
    }
    return stringContainer.join('');
  } else if (num < 0) {
    return 'ERROR';
  }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
