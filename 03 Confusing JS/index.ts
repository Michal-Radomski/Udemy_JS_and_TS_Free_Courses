//* Scoping Chain
// var myName = "Mich";
// // console.log({ myName });

// (function first() {
//   const age = 30;
//   // console.log({ myName });

//   if (age >= 21) {
//     // const isAllowedToDrive = true;
//     var isAnArmyLover = true;
//   }
//   // @ts-ignore
//   console.log({ isAnArmyLover });

//   function second() {
//     const job = "Software Engineer";
//     console.log(`${myName} ${age} ${job}`);
//   }
//   second();
// })();

//* this keyword
// console.log("this:", this);

// (function calcAge(this: any) {
//   console.log("this:", this);
// })();

// const Mich = {
//   firstName: "Mich",
//   testing() {
//     console.log("this:", this);
//     // function innerFunction() {
//     //   console.log("this:", this);
//     // }
//     // innerFunction();
//   },
// };
// Mich.testing();

// var Mich2 = {
//   firstName: "Mich2",
//   testing() {
//     console.log("this:", this);
//   },
// };
// Mich2.testing();

// // const testing = () => {
// //   console.log("this:", this as typeof globalThis);
// // };
// // testing();

// // console.log(self);
// // console.log("globalThis:", globalThis);

// const Johny = {
//   firstName: "Johny",
// } as any;
// Johny.testing = Mich.testing;
// Johny.testing();

// const Mona = {
//   firstName: "Mona",
// } as any;
// Mona.testing = Johny.testing;
// Mona.testing();

//* New operator
// const john = {
//   firstName: "John",
//   lastName: "Doe"
// }

// const BluePrint = function (this: any, firstName: string, lastName: string) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// const john = new (BluePrint as any)("John", "Doe");
// console.log({ john });

//* Async JS
// const listLocations = (locations: string[]) => locations.forEach((location: string) => console.log({ location }));
// const myLocations = ["Olsztyn", "Gdansk", "Poznan"];
// listLocations(myLocations);

// let id = 10;
// console.log(1, "Starting");
// setTimeout(() => {
//   console.log(4, "Waiting 2s");
// }, 2000);
// setTimeout(
//   (id) => {
//     console.log(3, "Waiting 0s for id: " + id);
//   },
//   0,
//   id
// );
// console.log(2, "Ending");

//* Callback
// const x = function (str: string): void {
//   console.log("Function X");
//   console.log({ str });
// };
// const y = function (callback: Function, str: string): void {
//   console.log("Function Y");
//   callback(str);
// };
// y(x, "string");

// const calc = function (num1: number, num2: number, calcType: string) {
//   if (calcType === "add") {
//     return num1 + num2;
//   }
//   if (calcType === "multiply") {
//     return num1 * num2;
//   }
// };
// console.log('calc(5, 5, "add"):', calc(5, 5, "add"));

const add = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;
const calc = function (num1: number, num2: number, calcType: Function) {
  return calcType(num1, num2);
};
console.log("calc(10,10, multiply):", calc(10, 10, multiply));

//* Promise chaining
// new Promise(function (resolve, _reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     console.log(1, { result }); // 1
//     return (result as number) * 2;
//   })
//   .then(function (result) {
//     console.log(2, { result }); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(3, { result }); // 4
//     return result * 2;
//   })
//   .catch(function (err) {
//     console.log({ err });
//   });

//* Async/ await
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

(async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result); // Expected output: "resolved"
})();
