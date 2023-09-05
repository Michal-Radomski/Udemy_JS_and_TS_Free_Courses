function boilWater(clb: TimerHandler): void {
  console.log("Gotowanie wody...");
  setTimeout(clb, 1000);
}
function makeTea(clb: TimerHandler): void {
  console.log("Zaparzenie herbaty...");
  setTimeout(clb, 2000);
}
function waitingForGoodTemperature(clb: TimerHandler): void {
  console.log("Czekam na odpowiednia temperature...");
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
