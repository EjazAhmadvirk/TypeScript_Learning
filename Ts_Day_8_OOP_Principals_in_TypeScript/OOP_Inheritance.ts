class Vehicle {
    constructor(public brand: string) {}
  
    public drive(): void {
      console.log(`${this.brand} is moving.`);
    }
  }
  
  class Car extends Vehicle {
    public honk(): void {
      console.log(`${this.brand} says: Beep beep!`);
    }
  }
  
  const myCar2 = new Car("Honda");
  myCar2.drive();
  myCar2.honk();
  