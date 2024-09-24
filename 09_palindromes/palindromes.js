const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const arrayFromString = string.split("");

  let isPalindrom = true;

  for (let i = 0; i < arrayFromString.length; i++) {
    if (arrayFromString[i] !== arrayFromString[arrayFromString.length - i - 1]) {
      isPalindrom = false;
      break;
    }
  }

  return isPalindrom;
};

// Do not edit below this line
module.exports = palindromes;
