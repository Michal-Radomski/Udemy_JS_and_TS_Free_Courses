//* Primitive Types
// const customerName = "John";
// const accountBalance = 2000;
// const isValid = true;
// const object: null = null;
// let test: undefined;
// console.log({ test }, typeof test);
// console.log("object:", object, typeof object);

// let x = "111";
// let y = 123;
// // @ts-ignore
// console.log("x == y, x === y:", x == y, x === y);

// const s1 = "You are the CREATOR of your destiny";
// console.log("s1.toLowerCase():", s1.toLowerCase());
// console.log("s1.substring(5, 10):", s1.substring(5, 10));
// console.log("s1.charAt(8):", s1.charAt(8));

// let age = 30;
// let age1 = age; // Pointing to age
// console.log(`age = ${age}  age1 = ${age1}`);
// age = 31; // Pointing to new address
// console.log(`age = ${age}  age1 = ${age1}`);

//* Reference Types [Array, Object and Function]
let info = {
  Name: "Abc",
  Age: 10,
};
console.log(`Name : ${info.Name} Age : ${info.Age}`);

let info1 = info;
info1.Age = 14; // Change the Age of original object
console.log(`Name : ${info.Name} Age : ${info.Age}`);
