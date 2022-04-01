const findTheOldest = function (people) {
  ages = determineAges(people);
  indicesMaxAge = findMaxAges(ages);
  return people[indicesMaxAge];
};

function determineAges(people) {
  let ages = [];
  i = 0;
  people.forEach((person) => {
    if (person.yearOfDeath) {
      ages[i] = person.yearOfDeath - person.yearOfBirth;
    } else {
      let currentYear = parseInt(new Date().getFullYear().toString());
      ages[i] = currentYear - person.yearOfBirth;
    }
    i++;
  });
  return ages;
}

function findMaxAges(ages) {
  let maxAge = Math.max.apply(Math, ages);
  indicesMaxAge = ages.indexOf(maxAge);
  return indicesMaxAge;
}

// Do not edit below this line
module.exports = findTheOldest;
