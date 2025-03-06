function getRandomCode() {
  const codes = ["1234", "5678", "abc", "def"];
  return codes[Math.floor(Math.random() * codes.length)];
}

console.log(getRandomCode());
