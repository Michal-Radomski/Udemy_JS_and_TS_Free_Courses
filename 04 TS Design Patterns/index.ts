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
// class BlurayPlayer {
//   on() {
//     console.log("Bluray player turning on...");
//   }

//   turnOff() {
//     console.log("Bluray turning off..");
//   }

//   play() {
//     console.log("Playing bluray disc...");
//   }
// }

// class Amplifier {
//   on() {
//     console.log("Amp is turning on..");
//   }

//   turnOff() {
//     console.log("Amplifier turning off..");
//   }

//   setSource(source: string) {
//     console.log("Setting source to " + source);
//   }

//   setVolume(volumeLevel: number) {
//     console.log("Setting volume to " + volumeLevel);
//   }
// }

// class Lights {
//   dim() {
//     console.log("Lights are dimming..");
//   }
// }

// class TV {
//   turnOn() {
//     console.log("TV turning on..");
//   }

//   turnOff() {
//     console.log("TV turning off..");
//   }
// }

// class PopcornMaker {
//   turnOn() {
//     console.log("Popcorn maker turning on..");
//   }

//   turnOff() {
//     console.log("Popcorn maker turning off..");
//   }

//   pop() {
//     console.log("Popping corn!");
//   }
// }

// // ----
// class HomeTheaterFacade {
//   private bluray: BlurayPlayer;
//   private amp: Amplifier;
//   private lights: Lights;
//   private tv: TV;
//   private popcornMaker: PopcornMaker;

//   constructor(amp: Amplifier, bluray: BlurayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
//     this.bluray = bluray;
//     this.amp = amp;
//     this.lights = lights;
//     this.tv = tv;
//     this.popcornMaker = popcornMaker;
//   }

//   //* Facade
//   public watchMovie() {
//     this.popcornMaker.turnOn();
//     this.popcornMaker.pop();

//     this.lights.dim();

//     this.tv.turnOn();

//     this.amp.on();
//     this.amp.setSource("bluray");
//     this.amp.setVolume(11);

//     this.bluray.on();
//     this.bluray.play();
//   }

//   endMovie() {
//     this.popcornMaker.turnOff();
//     this.amp.turnOff();
//     this.tv.turnOff();
//     this.bluray.turnOff();
//   }
// }

// // ----
// let bluray = new BlurayPlayer();
// let amp = new Amplifier();
// let lights = new Lights();
// let tv = new TV();
// let popcornMaker = new PopcornMaker();

// let hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
// hometheater.watchMovie();
// console.log("hometheater:", hometheater);

//@ Adapter Pattern
// interface IPhone {
//   useLightning(): void;
// }

// interface Android {
//   useMicroUSB(): void;
// }

// class iPhone7 implements IPhone {
//   useLightning() {
//     console.log("Using lightning port..");
//   }
// }

// class GooglePixel implements Android {
//   useMicroUSB() {
//     console.log("Using micro USB...");
//   }
// }

// // -----
// class LightningToMicroUSBAdapter implements Android {
//   iphoneDevice: IPhone;

//   constructor(iphone: IPhone) {
//     this.iphoneDevice = iphone;
//   }

//   useMicroUSB() {
//     console.log("Want to use micro USB, converting...");
//     this.iphoneDevice.useLightning();
//   }
// }

// const iphone = new iPhone7();
// const chargeAdaptor = new LightningToMicroUSBAdapter(iphone);

// chargeAdaptor.useMicroUSB();
// console.log("iphone:", iphone);
// console.log("chargeAdaptor:", chargeAdaptor);

//@ State pattern
module test {
  interface State {
    order: Order;
    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
  }

  class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPrepared: State;
    public currentState!: State;

    constructor() {
      this.cancelledOrderState = new CancelledOrderState(this);
      this.paymentPendingState = new PaymentPendingState(this);
      this.orderShippedState = new OrderShippedState(this);
      this.orderBeingPrepared = new OrderBeingPrepared(this);

      this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
      this.currentState = state;
    }

    public getCurrentState(): State {
      return this.currentState;
    }
  }

  class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    public cancelOrder() {
      console.log("This order is already cancelled.");
      this.order.setState(this.order.cancelledOrderState);
    }

    public verifyPayment() {
      console.log("The order is cancelled, you cannot pay anymore.");
    }

    public shipOrder() {
      console.log("The order is cancelled, you cannot ship it anymore.");
    }
  }

  class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    cancelOrder() {
      console.log("Cancelling your unpaid order...");
      this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
      console.log("Payment verified! Shipping soon.");
      this.order.setState(this.order.orderBeingPrepared);
    }
    shipOrder() {
      console.log("Cannot ship order when payment is pending.");
    }
  }

  class OrderBeingPrepared implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    cancelOrder() {
      console.log("Cancelling your order... You will be refunded.");
      this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
      console.log("Payment is already verified.");
    }
    shipOrder() {
      console.log("Shipping your order now...");
      this.order.setState(this.order.orderShippedState);
    }
  }

  class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
      this.order = order;
    }

    cancelOrder() {
      console.log("You cannot cancel an order that has been shipped.");
    }
    verifyPayment() {
      console.log("Payment is already verified.");
    }
    shipOrder() {
      console.log("Order is already shipped.");
    }
  }

  const order = new Order();

  order.getCurrentState().verifyPayment();
  order.getCurrentState().shipOrder();
  order.getCurrentState().cancelOrder();
  console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
  console.log("order:", order);
}
