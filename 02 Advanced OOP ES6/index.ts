const customerName = "John";
const accountBalance = 2000;
const isValid = true;
const object: null = null;
let test: undefined;
console.log({ test }, typeof test);
console.log("object:", object, typeof object);

let x = "111";
let y = 123;
// @ts-ignore
console.log("x == y, x === y:", x == y, x === y);
