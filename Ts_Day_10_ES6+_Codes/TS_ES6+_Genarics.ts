// Generic function: works with any type
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello"); // T is string
let output2 = identity<number>(100);     // T is number

// Generic class
class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContent());
