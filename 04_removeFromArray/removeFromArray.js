const removeFromArray = function(array, ...elementsToRemove) {
  const returnArray = [];

  array.forEach(element => {
    if (!elementsToRemove.includes(element)) {
      returnArray.push(element);
    }
  });

  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
