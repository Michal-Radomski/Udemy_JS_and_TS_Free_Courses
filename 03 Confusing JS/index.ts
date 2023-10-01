//* Scoping Chain
var myName = "Mich";
// console.log({ myName });

(function first() {
  const age = 30;
  // console.log({ myName });

  if (age >= 21) {
    // const isAllowedToDrive = true;
    var isAnArmyLover = true;
  }
  // @ts-ignore
  console.log({ isAnArmyLover });

  function second() {
    const job = "Software Engineer";
    console.log(`${myName} ${age} ${job}`);
  }
  second();
})();
