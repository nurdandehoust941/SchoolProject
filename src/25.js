function getRandomInt(max) {
  var maxNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  return maxNumber;
}

console.log(getRandomInt(10));
