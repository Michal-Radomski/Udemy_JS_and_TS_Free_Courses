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

const Mich = {
  firstName: "Mich",
  testing() {
    console.log("this:", this);
    // function innerFunction() {
    //   console.log("this:", this);
    // }
    // innerFunction();
  },
};
Mich.testing();

var Mich2 = {
  firstName: "Mich2",
  testing() {
    console.log("this:", this);
  },
};
Mich2.testing();

// const testing = () => {
//   console.log("this:", this as typeof globalThis);
// };
// testing();

// console.log(self);
// console.log("globalThis:", globalThis);

const Johny = {
  firstName: "Johny",
} as any;
Johny.testing = Mich.testing;
Johny.testing();
