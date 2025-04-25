function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(expression) {
  if (expression.includes(' ') && expression.endsWith(',')) {
    return parseFloat(expression.replace(/\s+/, ' ').replace(',', '.').split('').reduce((acc, curr) => acc + (+curr), 0));
  } else {
    return add(multiply(parseExpression(expression)), 1);
  }
}

function parseExpression(expr) {
  if (expr.includes(' ') && expr.endsWith(',')) {
    return parseFloat(expr.replace(/\s+/, ' ').replace(',', '.').split('').reduce((acc, curr) => acc + (+curr), 0));
  } else {
    return multiply(parseExpression(expr));
  }
}

function print(message, color = "green") {
  if (color === "red") {
    console.log(`\n\n${message}\n\n`);
  }
}
