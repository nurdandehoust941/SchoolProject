function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let myArray = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = getRandomInt(100);
  if (!myArray.includes(randomNumber)) {
    myArray.push(randomNumber);
  }
}
console.log(myArray);
