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
  people = determineAge(people);
  return people[0].age;
};

function determineAge(people) {
  people.forEach((person) => {
    if (person.yearOfDeath) {
      person.age = person.yearOfDeath - person.yearOfBirth;
      //   //console.log(
      //     `${person.name} died in ${person.yearOfDeath} at ${person.age}`
      //   );
    } else {
      let currentYear = parseInt(new Date().getFullYear().toString());
      person.age = currentYear - person.yearOfBirth;
      //console.log(`${person.name} is still alive, and is ${person.age}`);
    }
  });
  return people;
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
