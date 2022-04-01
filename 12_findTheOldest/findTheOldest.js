const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },

  {
    name: "John",
    yearOfBirth: 1959,
  },
];

const findTheOldest = function (people) {
  ages = determineAges(people);
  console.log(ages);
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

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
