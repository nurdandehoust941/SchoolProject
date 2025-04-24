function sum(a, b) {
  return a + b;
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) throw new Error("Division by zero is not allowed.");
      else return num1 / num2;
    default:
      throw new Error('Invalid operation');
  }
}

function displayMessage(message, color) {
  let messageText = `<p style="color: ${color}">${message}</p>`;
  document.body.appendChild(messageText);
}

let inputElement = document.getElementById('inputField');
displayMessage(`Enter numbers to sum and calculate:`, 'success');

document.getElementById('sumButton').addEventListener('click', function() {
  let num1 = Number(inputElement.value);
  let num2 = Number.parseInt(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    displayMessage('Please enter valid numbers and a number for operation!', 'error');
  } else {
    const result = calculate(num1, num2, operation: '+');

    displayMessage(`Result: ${result}`, 'success');
  }
});
