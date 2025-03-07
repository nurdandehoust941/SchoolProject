const generateRandomCode = () => {
  const randomNumber = Math.random() * 10;
  const randomLetter = String.fromCharCode(Math.floor((Math.random() * 26) + 97));
  return `${randomNumber}${randomLetter}`;
};
