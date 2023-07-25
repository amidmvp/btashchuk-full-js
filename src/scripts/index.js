const person = {
  fname: "Mike",
  lname: "Modano",
};

// Создание
const person2 = person;

person2.age = 47;

const person3 = Object.assign(person2, {
  job: "miner",
  adress: {
    country: "Ukraine",
    city: "Lviv",
    street: "Lenina",
    buildind: "69",
  },
});

console.dir({ person: person });
console.log(person === person2);

// Создание новых независимых объектов на основе существующих

const newInstanceA = { ...person3 };
console.dir({ newInstanceA });
console.log("person3 === newInstanceA", person3 === newInstanceA);
