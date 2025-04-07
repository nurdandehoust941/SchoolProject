function calculateBMI(height, weight) {
  if (height <= 0 || weight < 1) {
    throw new Error("Height must be positive and weight must be greater than or equal to 1");
  }

  const bmi = weight / (height * height);
  
  return `Your Body Mass Index is ${bmi.toFixed(2)}.`;
}

function showCode() {
  console.log(`
  function calculateBMI(height, weight) {
    if (height <= 0 || weight < 1) {
      throw new Error("Height must be positive and weight must be greater than or equal to 1");
    }

    const bmi = weight / (height * height);
  
    return `Your Body Mass Index is ${bmi.toFixed(2)}.`;
  }
`);
}

console.log(showCode());
