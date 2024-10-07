const message:string = "hello world!";
console.log(message);

type PersonInfo = [string, number, boolean];

let person1: PersonInfo = ["god", 20, true];

// Create function
const greetPerson = (person: PersonInfo): void => {
    const [name, age, license] = person; // Corrected variable name
    console.log(`Name is ${name}, my age is ${age}, my license is ${license}`);
}

greetPerson(person1); // Corrected function call



// union task
const formatUserInput = (input: string | number | boolean): string | number | boolean => {
    if(typeof input == "string"){
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    }else if(typeof input == "boolean"){
        return input ? "yes" : "no"
    }else if(typeof input == "number"){
        return `${input.toFixed(2)}`
    }else{
        throw new Error("Invalid input")
    }
}

console.log(formatUserInput("hello world"))
console.log(formatUserInput(true))
console.log(formatUserInput(100))

// generic
function add<T>(a:T,b:T):T ;
function add<T>(a:T ,b:T):T ;
function add(a:any,b:any):any {
     return a+b;
}

const result1 = add<number>(5,10);
const result2 = add<string>("Hello ","World!");

// multiline generic
function adds<T,U>(a: T, b: U): void {
    console.log(typeof a)
    console.log(typeof b)
}

console.log(adds<number,string>(10, "dog")); // Output: 30
console.log(adds(10, "dog")); 

// interface object 
// 1 Product
interface Product{
    name:string,
    price:number,
    quanity:number
}

let product1:Product={
    name:"parle",
    price:100,
    quanity:200
}

function caulate_Price(product:Product):number {
    return product.price*product.quanity
}
console.log(caulate_Price(product1))

// 2 person
interface PersonDt{
    name:string,
    id:number
}

let person2:PersonDt={
    name:"dinemo",
    id:10
}

function person_Detail(person:PersonDt):string {
    return "hello"+person.name
}
console.log(person_Detail(person2))