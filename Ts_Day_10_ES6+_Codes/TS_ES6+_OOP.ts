// Class with constructor, properties, and methods
class Person {
    private ssn: string; // private: accessible only inside the class
    public name: string; // public: default, accessible outside
    protected age: number; // protected: accessible in class & subclasses

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    // Method
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Getter for private property
    getSSN(): string {
        return this.ssn;
    }
}

// Inheritance
class Employee extends Person {
    constructor(name: string, age: number, ssn: string, public position: string) {
        super(name, age, ssn);
    }

    work(): string {
        return `${this.name} is working as ${this.position}.`;
    }
}

const ejaz = new Employee("Ejaz", 25, "123-45-6789", "Developer");
console.log(ejaz.greet());
console.log(ejaz.work());
