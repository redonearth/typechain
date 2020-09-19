const name = "Redonearth",
  age = 33,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, and you are ${gender}`);
};

sayHi(name, age);

export {};
