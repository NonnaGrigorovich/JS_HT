// ==================================================
// ES5 

// function Car ({maxSpeed, speed, isOn, distance, price}) {
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;
//   this.isOn = false;
//   this.distance = 0;
//   this.price = price;
// }

  
//   Car.getSpecs = function(car) {
//     console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn ${car.isOn}, distance: ${car.distance}, price: ${car.price}`)
//   }

//   Car.prototype.getPrice = function() {
//     return this.price;
//   }

//   Car.prototype.setPrice = function(price) {
//     return this.price + price;
//   }

//   Car.prototype.turnOn = function() {
//     return (this.isOn = true);
//   }

//   Car.prototype.turnOff = function() {
//     this.speed = 0;
//     return (this.isOn = false)
//   }

//   Car.prototype.accelerate = function(value) {
//     return this.speed + value <= this.maxSpeed ? (this.speed += value) : false;
//   }

//   Car.prototype.decelerate = function(value) {
//     return this.speed - value > 0 ? (this.speed -= value) : false;
//   }

//   Car.prototype.drive = function(hours) {
//     return this.isOn ? ( this.distance += hours * this.speed) : false;
//   }

// ==================================================
// ES6

// class Car {
  
//     static getSpecs(car) {
//       console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn ${car.isOn}, distance: ${car.distance}, price: ${car.price}`)
//     }
    
//     constructor({maxSpeed, speed, isOn, distance, price}) {
//       this.maxSpeed = maxSpeed;
//       this.speed = 0;
//       this.isOn = false;
//       this.distance = 0;
//       this.price = price;
//     }
  
//     get getPrice() {
//       return this.price;
//     }

//     set setPrice(price){
//       return this.price + price;
//     }

//     turnOn() {
//       return (this.isOn = true);
//     }
  
//     turnOff() {
//       this.speed = 0;
//       return (this.isOn = false)
//     }
  
//     accelerate(value) {
//       return this.speed + value <= this.maxSpeed ? (this.speed += value) : false;
//     }
  
//     decelerate(value) {
//       return this.speed - value > 0 ? (this.speed -= value) : false;
//     }
  
//     drive(hours) {
//       return this.isOn ? ( this.distance += hours * this.speed) : false;
//     }
//   }

  // ==================================================
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000