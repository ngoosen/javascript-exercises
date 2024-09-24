function checkParameters(param1, param2) {
  let isOk = true;;

  if (param1 < 0 || param2 < 0) {
    isOk = false;
  }

  if (param1 % 1 !== 0 || param2 % 1 !== 0) {
    isOk = false;
  }

  if (typeof param1 !== "number" || typeof param2 !== "number") {
    isOk = false;
  }

  return isOk;
}

const sumAll = function(start, end) {
  if (!checkParameters(start, end)) {
    return "ERROR";
  }

  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  let i= start;
  let sum = 0;

  while (i <= end) {
    sum += i++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
