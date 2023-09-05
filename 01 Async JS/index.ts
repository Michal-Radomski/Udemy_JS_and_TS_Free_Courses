//* 1. Callback
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

//@ Callback Hell
// boilWater(() => {
//   console.log("Woda zagotowana");
//   makeTea(() => {
//     console.log("Herbata zaparzona");
//     waitingForGoodTemperature(() => {
//       console.log("Temperatura Ok, można pić...");
//     });
//   });
// });

//* 2. Promise
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

// boilWater()
//   .then(() => {
//     console.log("Woda zagotowana");
//     return makeTea();
//   })
//   .then(() => {
//     console.log("Herbata zaparzona");
//     return waitingForGoodTemperature();
//   })
//   .then(() => {
//     console.log("Temperatura Ok, można pić...");
//   })
//   .catch((err) => {
//     console.error("Coś poszło nie tak...", err);
//   });

//* 3. Async/Await (+ IIFE)
// (async () => {
//   await boilWater();
//   console.log("Woda zagotowana");
//   await makeTea();
//   console.log("Herbata zaparzona");
//   await waitingForGoodTemperature();
//   console.log("Temperatura Ok, można pić...");
// })();

//* Exercises -> V1
// function doMyJob(hours: number, clb: Function) {
//   if (hours > 8) {
//     clb(new Error("Za długie godziny pracy"));
//   } else {
//     setTimeout(() => {
//       clb(null);
//     }, hours * 1000);
//   }
// }

// function pay(clb: Function) {
//   clb(null);
// }

// doMyJob(5, (err: Error) => {
//   if (err === null) {
//     console.log("Zadanie skończone");
//     pay(() => {
//       console.log("Zapłata poszła");
//     });
//   } else {
//     console.log("Błąd:", err);
//   }
// });

//* Exercises -> V2
// function doMyJob(hours: number) {
//   return new Promise<void>((resolve, reject) => {
//     if (hours > 8) {
//       reject(new Error("Za długie godziny pracy"));
//     } else {
//       setTimeout(() => {
//         resolve();
//       }, hours * 1000);
//     }
//   });
// }

// function pay() {
//   return new Promise<void>((resolve, _reject) => resolve());
// }

// doMyJob(5)
//   .then(() => {
//     console.log("Zadanie skończone");
//     return pay();
//   })
//   .then(() => {
//     console.log("Wypłata poszła");
//   })
//   .catch((err) => {
//     console.log("Bład:", err);
//   });

//* Exercises -> V3
function doMyJob(hours: number) {
  return new Promise<void>((resolve, reject) => {
    if (hours > 8) {
      reject(new Error("Za długie godziny pracy"));
    } else {
      setTimeout(() => {
        resolve();
      }, hours * 1000);
    }
  });
}

function pay() {
  return new Promise<void>((resolve, _reject) => resolve());
}

(async () => {
  await doMyJob(7);
  console.log("Zadanie skończone");
  await pay();
  console.log("Wypłata poszła");
  try {
  } catch (error) {
    console.log("Bład:", error);
  }
})();
