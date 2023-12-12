//@ Decorator Pattern
// abstract class Car {
//   public description!: string;

//   public getDescription(): string {
//     return this.description;
//   }

//   public abstract cost(): number;
// }

// abstract class CarOptions extends Car {
//   decoratedCar!: Car;
//   public abstract getDescription(): string;
// }

// // ------------------------------ Cars ------------------------------
// class ModelS extends Car {
//   public description = "Model S";

//   public cost(): number {
//     return 73000;
//   }
// }

// class ModelX extends Car {
//   public description = "Model X";

//   public cost(): number {
//     return 77000;
//   }
// }

// // ------------------------------ Options ------------------------------
// class EnhancedAutoPilot extends CarOptions {
//   constructor(car: Car) {
//     super();
//     this.decoratedCar = car;
//   }

//   public getDescription(): string {
//     return this.decoratedCar.getDescription() + ", Enhanced Autopilot";
//   }

//   public cost(): number {
//     return this.decoratedCar.cost() + 5000;
//   }
// }

// class SmartAirSuspension extends CarOptions {
//   constructor(car: Car) {
//     super();
//     this.decoratedCar = car;
//   }

//   public getDescription(): string {
//     return this.decoratedCar.getDescription() + ", Smart Air Suspension";
//   }

//   public cost(): number {
//     return this.decoratedCar.cost() + 2500;
//   }
// }

// class RearFacingSeats extends CarOptions {
//   constructor(car: Car) {
//     super();
//     this.decoratedCar = car;
//   }

//   public getDescription(): string {
//     return this.decoratedCar.getDescription() + ", Rear Facing Seats";
//   }

//   public cost(): number {
//     return this.decoratedCar.cost() + 4000;
//   }
// }

// // ------------------------------ Configure our Tesla! ------------------------------
// let myTesla = new ModelS();
// myTesla = new SmartAirSuspension(myTesla);
// myTesla = new RearFacingSeats(myTesla);

// console.log("myTesla.cost():", myTesla.cost());
// console.log("myTesla.getDescription():", myTesla.getDescription());
// console.log("myTesla:", myTesla);

//@ Observer Pattern
// interface Subject {
//   registerObserver(o: Observer): void;
//   removeObserver(o: Observer): void;
//   notifyObservers(): void;
// }

// interface Observer {
//   update(temperature: number): void;
// }

// // ------------------------------------------------------
// class WeatherStation implements Subject {
//   private observers: Observer[] = [];
//   private temperature!: number;

//   registerObserver(o: Observer) {
//     this.observers.push(o);
//   }

//   removeObserver(o: Observer) {
//     let index = this.observers.indexOf(o);
//     this.observers.splice(index, 1);
//   }

//   notifyObservers() {
//     for (let observer of this.observers) {
//       observer.update(this.temperature);
//     }
//   }

//   setTemperature(temp: number) {
//     console.log("WeatherStation: new temperature measurement: " + temp);
//     this.temperature = temp;
//     this.notifyObservers();
//   }
// }

// // ------------------------------------------------------
// class TemperatureDisplay implements Observer {
//   private subject: Subject;

//   constructor(weatherStation: Subject) {
//     this.subject = weatherStation;
//     weatherStation.registerObserver(this);
//   }

//   update(temperature: number) {
//     console.log("TemperatureDisplay: I need to update my display");
//   }
// }

// class Fan implements Observer {
//   private subject: Subject;

//   constructor(weatherStation: Subject) {
//     this.subject = weatherStation;
//     weatherStation.registerObserver(this);
//   }

//   update(temperature: number) {
//     if (temperature > 25) {
//       console.log("Fan: Its hot here, turning myself on...");
//     } else {
//       console.log("Fan: Its nice and cool, turning myself off...");
//     }
//   }
// }

// let weatherStation = new WeatherStation();

// let tempDisplay = new TemperatureDisplay(weatherStation);
// let fan = new Fan(weatherStation);

// weatherStation.setTemperature(20);
// weatherStation.setTemperature(30);
// console.log("weatherStation:", weatherStation);

//@ Facade Pattern
class BlurayPlayer {
  on() {
    console.log("Bluray player turning on...");
  }

  turnOff() {
    console.log("Bluray turning off..");
  }

  play() {
    console.log("Playing bluray disc...");
  }
}

class Amplifier {
  on() {
    console.log("Amp is turning on..");
  }

  turnOff() {
    console.log("Amplifier turning off..");
  }

  setSource(source: string) {
    console.log("Setting source to " + source);
  }

  setVolume(volumeLevel: number) {
    console.log("Setting volume to " + volumeLevel);
  }
}

class Lights {
  dim() {
    console.log("Lights are dimming..");
  }
}

class TV {
  turnOn() {
    console.log("TV turning on..");
  }

  turnOff() {
    console.log("TV turning off..");
  }
}

class PopcornMaker {
  turnOn() {
    console.log("Popcorn maker turning on..");
  }

  turnOff() {
    console.log("Popcorn maker turning off..");
  }

  pop() {
    console.log("Popping corn!");
  }
}

// ----
class HomeTheaterFacade {
  private bluray: BlurayPlayer;
  private amp: Amplifier;
  private lights: Lights;
  private tv: TV;
  private popcornMaker: PopcornMaker;

  constructor(amp: Amplifier, bluray: BlurayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
    this.bluray = bluray;
    this.amp = amp;
    this.lights = lights;
    this.tv = tv;
    this.popcornMaker = popcornMaker;
  }

  public watchMovie() {
    this.popcornMaker.turnOn();
    this.popcornMaker.pop();

    this.lights.dim();

    this.tv.turnOn();

    this.amp.on();
    this.amp.setSource("bluray");
    this.amp.setVolume(11);

    this.bluray.on();
    this.bluray.play();
  }

  endMovie() {
    this.popcornMaker.turnOff();
    this.amp.turnOff();
    this.tv.turnOff();
    this.bluray.turnOff();
  }
}

// ----
let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
hometheater.watchMovie();
console.log("hometheater:", hometheater);
