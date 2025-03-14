// This is an example of a simple function that takes in a string and returns its reverse.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
