function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function findNearestNumber(array, target) {
  let closestValue = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (Math.abs(target - array[i]) < Math.abs(target - closestValue)) {
      closestValue = array[i];
    }
  }

  return closestValue;
}

function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function findCommonElements(set1, set2) {
  const result = [];

  for (let value of set1) {
    if (set2.includes(value)) {
      result.push(value);
    }
  }

  return result;
}
