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
// let info = {
//   Name: "Abc",
//   Age: 10,
// };
// console.log(`Name : ${info.Name} Age : ${info.Age}`);

// let info1 = info;
// info1.Age = 14; // Change the Age of original object
// console.log(`Name : ${info.Name} Age : ${info.Age}`);

let obj1 = new Object() as { myProperty: string } | null;
let obj2 = obj1;
obj1!.myProperty = "All the power is with in you.";
console.log("obj2.myProperty:", obj2!.myProperty);
obj1 = null;
obj2 = null;
console.log({ obj1, obj2 });

const products = new Array();
const date = new Date();
const error = new Error("Something went wrong");
console.log({ products, date, error });
const regEx = new RegExp("\\d+");
const regEx1 = /\d+/ as RegExp;
console.log("regEx:", regEx, typeof regEx);
console.log("regEx1:", regEx1, typeof regEx1);

// Function constructor
const sum = new Function("a", "b", "return a + b");
console.log("sum(2, 6):", sum(2, 6)); // Expected output: 8

// Date constructor
const date1 = new Date("December 17, 1995 03:24:00"); // Sun Dec 17 1995 03:24:00 GMT...
const date2 = new Date("1995-12-17T03:24:00"); // Sun Dec 17 1995 03:24:00 GMT...
console.log("date1 === date2:", date1 === date2); // Expected output: false
// @ts-ignore
console.log("date1 - date2:", date1 - date2); // Expected output: 0

// Error constructor
const x = Error("I was created using a function call!");
const y = new Error('I was constructed via the "new" keyword!');
console.log({ x, y }, typeof x, typeof y);

const student = {
  name: "Bob",
  score: 80,
};
const s1 = new Object() as { name: string; score: number };
s1.name = "Bob";
s1.score = 80;
console.log("student.name:", student.name);
console.log("s1.name:", s1.name);

const studentNames = ["John", "Bob", "Harry"];
const sn = new Array("John", "Bob", "Harry");
console.log("studentNames[0]:", studentNames[0]);
console.log("sn[0]:", sn[0]);

function hello(name: string) {
  return "Hello " + name;
}
console.log("hello('Michal'):", hello("Michal"));
const myFunc = new Function("name", "return 'Hello '+name");
console.log('myFunc("Michal"):', myFunc("Michal"));

console.log("student instanceof Object):", student instanceof Object);
console.log("studentNames instanceof Array:", studentNames instanceof Array);
console.log("hello instanceof Function:", hello instanceof Function);
console.log("hello instanceof Object:", hello instanceof Function);
console.log("studentNames instanceof Object: ", hello instanceof Function);
console.log("student instanceof Array:", hello instanceof Function);
