// export.ts
export const PI = 3.14;
export function circleArea(radius: number): number {
    return PI * radius * radius;
}

// import.ts
import { PI, circleArea } from "./export";

console.log("PI:", PI);
console.log("Area of circle:", circleArea(5));
