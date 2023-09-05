//* Callback
function boilWater(clb: TimerHandler): void {
  console.log("Gotowanie wody...");
  setTimeout(clb, 1000);
}
function makeTea(clb: TimerHandler): void {
  console.log("Zaparzenie herbaty...");
  setTimeout(clb, 2000);
}
function waitingForGoodTemperature(clb: TimerHandler): void {
  console.log("Czekam na odpowiednią temperaturę...");
  setTimeout(clb, 500);
}

boilWater(() => {
  console.log("Woda zagotowana");
  makeTea(() => {
    console.log("Herbata zaparzona");
    waitingForGoodTemperature(() => {
      console.log("Temperatura Ok, można pić...");
    });
  });
});

//* Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Wszystko Ok!");
    }
    reject(new Error("Nie che mię pracować!"));
  }, 5000);
});
promise
  .then((res) => {
    console.log("Zadanie skończone", res);
  })
  .catch((err) => {
    console.error("Coś poszło nie tak...", err);
  });
