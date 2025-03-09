const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}

let result = [];
for (let i = 1; i <= 5; i++) {
    result.push(getRandomNumber());
}
console.log(result);
