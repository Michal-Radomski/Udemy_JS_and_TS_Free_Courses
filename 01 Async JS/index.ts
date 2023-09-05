// //* Callback
// function boilWater(clb: TimerHandler): void {
//   console.log("Gotowanie wody...");
//   setTimeout(clb, 1000);
// }
// function makeTea(clb: TimerHandler): void {
//   console.log("Zaparzenie herbaty...");
//   setTimeout(clb, 2000);
// }
// function waitingForGoodTemperature(clb: TimerHandler): void {
//   console.log("Czekam na odpowiednią temperaturę...");
//   setTimeout(clb, 500);
// }

//@ Promise Hell
// boilWater(() => {
//   console.log("Woda zagotowana");
//   makeTea(() => {
//     console.log("Herbata zaparzona");
//     waitingForGoodTemperature(() => {
//       console.log("Temperatura Ok, można pić...");
//     });
//   });
// });

//* Promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("Wszystko Ok!");
//     }
//     reject(new Error("Nie che mię pracować!"));
//   }, 5000);
// });
// promise
//   .then((res) => {
//     console.log("Zadanie skończone", res);
//   })
//   .catch((err) => {
//     console.error("Coś poszło nie tak...", err);
//   });

//* Promises
function boilWater(): Promise<void> {
  console.log("Gotowanie wody...");
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, 1000);
  });
}
function makeTea(): Promise<void> {
  console.log("Zaparzenie herbaty...");
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, 2000);
  });
}
function waitingForGoodTemperature(): Promise<void> {
  console.log("Czekam na odpowiednią temperaturę...");
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, 500);
  });
}

boilWater()
  .then(() => {
    console.log("Woda zagotowana");
    return makeTea();
  })
  .then(() => {
    console.log("Herbata zaparzona");
    return waitingForGoodTemperature();
  })
  .then(() => {
    console.log("Temperatura Ok, można pić...");
  })
  .catch((err) => {
    console.error("Coś poszło nie tak...", err);
  });
