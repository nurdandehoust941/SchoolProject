function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 5; i++) {
  const num = getRandomInt(10);
  if (!numbers.includes(num)) {
    numbers.push(num);
  } else {
    i--;
  }
}
console.log(numbers);
