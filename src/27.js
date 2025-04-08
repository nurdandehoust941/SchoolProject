let sum = 0;
for(let i = 1; i <= 5; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    if(num > i) {
        console.log(`Number ${num} is bigger than the current number`);
        break;
    }
    sum += num;
}

console.log("The sum of all numbers between 1 and 5 is:", sum);
