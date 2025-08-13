// Vehicle is a parent class
class Vehicle {
    constructor(public brand: string) {}
  
    public drive(): void {
      console.log(`${this.brand} is moving.`);
    }
  }


  // Car is a child class of Vehicle
  
  class Car extends Vehicle {
    public honk(): void {
      console.log(`${this.brand} says: Beep beep!`);
    }
  }
  
  const myCar2 = new Car("Honda"); // myCar2 is an instance of Car  
  myCar2.drive(); // Car has access to the drive method of Vehicle
  myCar2.honk(); // Car has access to the honk method of Car
  