const fibonacci = function(position) {
  position = parseInt(position);

  if (isNaN(position) || position < 0) return "OOPS";
  if (position === 0) return 0;

  const fibonacciArray = [1, 1];

  while (fibonacciArray.length < position) {
    const latest = fibonacciArray[fibonacciArray.length - 1];
    const previous = fibonacciArray[fibonacciArray.length - 2]

    fibonacciArray.push(latest + previous);
  }

  return fibonacciArray[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
