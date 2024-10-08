// const message:string = "hello world!";
console.log(message);

let person:{name:string,age:number,isstudent:boolean,address:{city:string;country:string}}={
    name:"god",
    age:20,
        isstudent:true,
        address:{
            city:"new yourk",
                country:"United state of america"
        }
}
console.log(person)

const product:{name:string,price:number}={
    name:"parleje",
    price:100
}
console.log(product)

// Type alice
type Person={
    name:string,age:number,isstudent:boolean,address:{city:string;country:string}
}
let person2:Person={
    name:"god",
    age:20,
        isstudent:true,
        address:{
            city:"new yourk",
                country:"United state of america"
        }
}

// #1. Function call signature:  refers to the declaration of a function, which
// includes the function's name, parameters, and return type.
// it defines the structure and the type information of a function without including function's body
// * call signture are typically used inside the object type notation to describe the shape of the function
// without object types


type Student = {
    name: string;
    age: number;
    greeting: (country: string) => string; //method call signature
}

const introduction = (student1: Student): string => {
    return `Hello,${student1.name}. Your age is ${student1.age}`;
}

const student1:Student = {
    name: "Ram",
    age: 18,
    greeting:(country:string):string => `Hello, my name is ${student1.name}, my age is ${student1.age}. I am from ${country}`
}
// console.log(introduction(student1));
console.log(student1.greeting("Bharat"));



// In TypeScript, an enum (short for "enumeration") is a special data type that allows you to define a set of named constants. Enums make it easier to handle sets of related values, improving code readability and maintainability.

// Basic Example of Enums
// Here's a simple example:

// typescript
// Copy code
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// Using the enum
let move: Direction = Direction.Up;

if (move === Direction.Up) {
    console.log("Moving Up!");
}
// Explanation
// Definition: The Direction enum defines four possible values: Up, Down, Left, and Right. By default, the first value is assigned 0, the second 1, and so on.

// Usage: You can use the enum in your code by referencing it, like Direction.Up.

// Custom Values
// You can also assign custom values to the enum members:

// typescript
// Copy code
// enum Response {
//     No = 0,
//     Yes = 1,
//     Maybe = 2
// }

// Using the enum
// let answer: Response = Response.Yes;

// console.log(answer); // Outputs: 1
// String Enums
// TypeScript also supports string enums, which are useful when you want the enum values to be meaningful strings:

// typescript
// Copy code
enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}

// Using the enum
let level: LogLevel = LogLevel.Warn;

console.log(level); // Outputs: WARN
// Benefits of Using Enums
// Readability: Enums provide meaningful names instead of using magic numbers or strings.
// Type Safety: Enums help catch errors at compile time by ensuring that only valid values are used.
// Ease of Maintenance: If you need to change a value, you only need to do it in one place.
// Enums are a powerful feature in TypeScript that can help you write clearer and more maintainable code!