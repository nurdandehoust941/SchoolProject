// This function takes in an array of numbers and returns the sum of those numbers
function sum(numbers) {
  // Initialize the sum to 0
  let total = 0;

  // Loop through each number and add it to the total
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  // Return the total
  return total;
}
