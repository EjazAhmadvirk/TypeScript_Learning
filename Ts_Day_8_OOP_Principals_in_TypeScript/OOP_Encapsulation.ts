class Car {
    public brand: string;   // public: can be accessed anywhere
    private speed: number;  // private: only inside this class
    protected fuel: number; // protected: inside this and subclasses
  
    constructor(brand: string, speed: number, fuel: number) {
      this.brand = brand;
      this.speed = speed;
      this.fuel = fuel;
    }
  
    public startEngine(): void {
      console.log(`${this.brand} engine started at ${this.speed} km/h`);
    }
  
    public getSpeed(): number {
      return this.speed; // controlled access
    }
  }
  
  const myCar = new Car("Toyota", 180, 50);
  myCar.startEngine();
  console.log("Speed:", myCar.getSpeed());
  // console.log(myCar.speed); ❌ Error (private)
  