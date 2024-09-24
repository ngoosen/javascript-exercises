const findTheOldest = function(people) {
  const oldestStack = [];
  let oldestStackIndex = 0;

  people.forEach((person, index) => {
    let countFrom = new Date().getFullYear();

    if (person.yearOfDeath) {
      countFrom = person.yearOfDeath;
    }

    const age = countFrom - person.yearOfBirth;

    if (oldestStack.length === 0 || oldestStack[oldestStack.length - 1] < age) {
      oldestStack.push(age);
      oldestStackIndex = index;
    }
  });

  return people[oldestStackIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
