//@ Primitive Types
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

//* String constructor
// const a = new String("Hello world"); // a === "Hello world" is false
// const b = String("Hello world"); // b === "Hello world" is true
// console.log("a instanceof String:", a instanceof String); // is true
// // @ts-ignore
// console.log("b instanceof String:", b instanceof String); // is false
// console.log("typeof a:", typeof a); // "object"
// console.log("typeof b:", typeof b); // "string"
// const c = "Hello world";
// console.log("b===c:", b === c);

//@ Reference Types [Array, Object and Function]
// let info = {
//   Name: "Abc",
//   Age: 10,
// };
// console.log(`Name : ${info.Name} Age : ${info.Age}`);

// let info1 = info;
// info1.Age = 14; // Change the Age of original object
// console.log(`Name : ${info.Name} Age : ${info.Age}`);

// let obj1 = new Object() as { myProperty: string } | null;
// let obj2 = obj1;
// obj1!.myProperty = "All the power is with in you.";
// console.log("obj2.myProperty:", obj2!.myProperty);
// obj1!.myProperty = "Test";
// console.log({ obj1, obj2 });
// obj1 = null;
// obj2 = null;
// console.log({ obj1, obj2 });

// const products = new Array();
// const date = new Date();
// const error = new Error("Something went wrong");
// console.log({ products, date, error });
// const regEx = new RegExp("\\d+");
// const regEx1 = /\d+/ as RegExp;
// console.log("regEx:", regEx, typeof regEx);
// console.log("regEx1:", regEx1, typeof regEx1);

// //* Function constructor
// const sum = new Function("a", "b", "return a + b");
// console.log("sum(2, 6):", sum(2, 6)); // Expected output: 8

// //* Date constructor
// const date1 = new Date("December 17, 1995 03:24:00"); // Sun Dec 17 1995 03:24:00 GMT...
// const date2 = new Date("1995-12-17T03:24:00"); // Sun Dec 17 1995 03:24:00 GMT...
// console.log("date1 === date2:", date1 === date2); // Expected output: false
// // @ts-ignore
// console.log("date1 - date2:", date1 - date2); // Expected output: 0

// //* Error constructor
// const x = Error("I was created using a function call!");
// const y = new Error('I was constructed via the "new" keyword!');
// console.log({ x, y }, typeof x, typeof y);

// const student = {
//   name: "Bob",
//   score: 80,
// };
// const s1 = new Object() as { name: string; score: number };
// s1.name = "Bob";
// s1.score = 80;
// console.log("student.name:", student.name);
// console.log("s1.name:", s1.name);

// const studentNames = ["John", "Bob", "Harry"];
// const sn = new Array("John", "Bob", "Harry");
// console.log("studentNames[0]:", studentNames[0]);
// console.log("sn[0]:", sn[0]);
// console.log("typeof student, s1, studentNames, sn:", typeof student, typeof s1, typeof studentNames, typeof sn);

// function hello(name: string) {
//   return "Hello " + name;
// }
// console.log("hello('Michal'):", hello("Michal"));
// const myFunc = new Function("name", "return 'Hello '+name");
// console.log('myFunc("Michal"):', myFunc("Michal"), typeof myFunc);

// console.log("student instanceof Object):", student instanceof Object);
// console.log("studentNames instanceof Array:", studentNames instanceof Array);
// console.log("hello instanceof Function:", hello instanceof Function);
// console.log("hello instanceof Object:", hello instanceof Function);
// console.log("studentNames instanceof Object: ", hello instanceof Function);
// console.log("student instanceof Array:", hello instanceof Function);

// const literalString = "This is a literal string";
// const stringObject = new String("String created with constructor");
// // @ts-ignore
// console.log("literalString instanceof String:", literalString instanceof String); // false, string primitive is not a String
// console.log("stringObject instanceof String:", stringObject instanceof String); // true
// // @ts-ignore
// console.log("literalString instanceof Object:", literalString instanceof Object); // false, string primitive is not an Object
// console.log("stringObject instanceof Object:", stringObject instanceof Object); // true
// console.log("typeof literalString, stringObject:", typeof literalString, typeof stringObject);

// const str1 = "test";
// const str2 = new String("test");
// console.log({ str1, str2 }, typeof str1, typeof str2);
// const str1_1 = str1.substring(1, 2);
// const str2_1 = str2.substring(1, 2);
// console.log({ str1_1, str2_1 }, typeof str1_1, typeof str2_1);

//@ Functions
//* Hoisting
// console.log("evenOrOdd(2):", evenOrOdd(2));

// function evenOrOdd(num: number) {
//   console.log(arguments[0], arguments);
//   console.log(arguments.length);
//   console.log(evenOrOdd.length);
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// const e = evenOrOdd;
// console.log(e(10));
// console.log("typeof e:", typeof e);

// const evenOrOdd2 = function (num: number) {
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// console.log(evenOrOdd2(5));
// console.log("typeof evenOrOdd2:", typeof evenOrOdd2);

// const studentIds = [30, 10, 20, 5, 100];
// studentIds.sort(function (num1, num2) {
//   return num1 - num2;
// });
// console.log({ studentIds });

// function product(nums: number[]) {
//   let result = 1;
//   for (let i = 0; i < nums.length; i++) {
//     result *= nums[i];
//   }
//   return result;
// }

// console.log(product([3, 4, 5]));
// console.log(product([9, 8]));
// console.log(product([10]));

// const student = {
//   id: 1,
//   name: "Bob",
//   display: function () {
//     console.log("this:", this);
//     console.log(this.id, this.name);
//   },
// };
// student.display();

//* Call
// function Product(this: any, name: string, price: number) {
//   this.name = name;
//   this.price = price;
// }

// function Food(this: any, name: string, price: number) {
//   Product.call(this, name, price);
//   this.category = "food";
// }
// console.log(new (Food as any)("cheese", 5).name); // Expected output: "cheese"

//* Apply
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
// console.log({ max }); // Expected output: 7
// const min = Math.min.apply(null, numbers);
// console.log({ min }); // Expected output: 2

//* Bind
// const _module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = _module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope -> Expected output: undefined
// const boundGetX = unboundGetX.bind(_module);
// console.log(boundGetX()); // Expected output: 42

// function displayDetails(this: any, testscore: number, testscore2: number) {
//   console.log(this.id);
//   console.log(this.name);
//   console.log(testscore);
//   console.log(testscore2);
// }

// const student1 = {
//   id: 1,
//   name: "Bob",
// };

// const student2 = {
//   id: 2,
//   name: "John",
// };
// // console.log("student1, 10,10:", student1, 10, 10);
// // console.log("student2, 20,20:", student2, 20, 20);

// displayDetails.call(student1, 10, 10);
// displayDetails.call(student2, 20, 20);
// displayDetails.apply(student1, [10, 20]);
// displayDetails.apply(student2, [20, 30]);

// const displayForStudent1 = displayDetails.bind(student1);
// displayForStudent1(10, 10);

// const displayForStudent2 = displayDetails.bind(student2, 20);
// displayForStudent2(20);

// const product = {
//   name: "Iphone",
// };
// console.log("Object.isExtensible(product):", Object.isExtensible(product));

//@ Objects
// const course1 = {
//   name: "JavaScript fundamentals", //[[Put]]
// } as { name: string; description?: string };

// const course2 = new Object() as { name: string };
// course2.name = "ReactJS"; //[[Put]]
// course1.name = "End to End Java Project"; //[[Set]]
// course1.description = "Master Java Project Development"; //[[Put]]
// console.log({ course1, course2 });

// delete course1.description; //[[Delete]]
// console.log('"description" in course1:', "description" in course1);
// console.log('"toString" in course1', "toString" in course1);
// console.log('course1.hasOwnProperty("toString"):', course1.hasOwnProperty("toString"));

// for (let eachProperty in course1) {
//   console.log({ eachProperty });
//   console.log(course1[eachProperty as keyof typeof course1]);
// }

// const allProperties = Object.keys(course1);
// console.log({ allProperties });

// const allValues = Object.values(course1);
// console.log({ allValues });

// const allEntries = Object.entries(course1);
// console.log({ allEntries });

// for (let i = 0; i < allProperties.length; i++) {
//   console.log(allProperties[i]);
//   console.log(course1[allProperties[i] as keyof typeof course1]);
// }
// console.log(course1.propertyIsEnumerable("name"));
// console.log(allProperties.propertyIsEnumerable("length"));

// //* hasOwnProperty() + Object.entries() + Object.keys() + Object.values() + Object.hasOwn()
// const object1 = {} as any;
// object1.property1 = 42;
// console.log("object1.hasOwnProperty('property1'):", object1.hasOwnProperty("property1")); // Expected output: true

// const object2 = {
//   a: "someString",
//   b: 42,
//   c: false,
// };
// console.log(Object.keys(object2)); // Expected output: Array ["a", "b", "c"]

// const object3 = {
//   a: "someString",
//   b: 42,
//   c: false,
// };
// console.log(Object.values(object3)); // Expected output: Array ["someString", 42, false]

// const obj = { foo: "bar", baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
// console.log('obj.propertyIsEnumerable("baz"):', obj.propertyIsEnumerable("baz"));
// console.log('obj.propertyIsEnumerable("foo"):', obj.propertyIsEnumerable("foo"));

// const object4 = {
//   prop: "exists",
// };
// console.log("Object.hasOwn(object4, 'prop'):", Object.hasOwn(object4, "prop")); // Expected output: true
// console.log("Object.hasOwn(object4, 'toString'):", Object.hasOwn(object4, "toString")); // Expected output: false

// //* Operator: in
// const car = { make: "Honda", model: "Accord", year: 1998 } as { make?: string; model: string; year: number };
// console.log("make" in car); // Expected output: true

// delete car.make;
// if ("make" in car === false) {
//   car.make = "Suzuki";
// }
// console.log(car.make); // Expected output: "Suzuki"

// const creditCard = {
//   _name: "John",
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     this._name = value;
//   },
// };
// console.log("creditCard.name:", creditCard.name);
// creditCard.name = "Bob";
// console.log("creditCard.name:", creditCard.name);
// creditCard._name = "Mich";
// console.log({creditCard});

// const creditCard2 = {
//   _name: "John",
// } as { _name?: string };

// Object.defineProperty(creditCard2, "name", {
//   get: function () {
//     return this._name;
//   },
// });

// console.log("name" in creditCard2);
// console.log(creditCard2.propertyIsEnumerable("name"));

// delete creditCard2._name;
// console.log("name" in creditCard2);

// const object1 = {} as { property1: number };
// Object.defineProperty(object1, "property1", {
//   value: 42,
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
// object1.property1 = 77; // Throws an error in strict mode
// console.log("object1.property1:", object1.property1); // Expected output: 42

var creditCard = {} as { name?: string };
Object.defineProperty(creditCard, "name", {
  value: "John",
  enumerable: true, // By default: false
  configurable: true, // By default: false
  writable: true, // By default: false
});

console.log("name" in creditCard);
console.log(creditCard.propertyIsEnumerable("name"));

delete creditCard.name;
console.log("name" in creditCard);

creditCard.name = "Bob";
console.log(creditCard.name);
