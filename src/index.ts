interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Redonearth",
  age: 33,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, and you are ${person.gender}!`;
};

console.log(sayHi(person));

export {};
