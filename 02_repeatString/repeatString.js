const repeatString = function(string, number) {
  if (number < 0) {
    return "ERROR";
  }

  let returnString = "";

  for (let i = 0; i < number; i++) {
    returnString += string;
  }

  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
