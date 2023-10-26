const name="fog"
const No=161
console.log(`My name is ${name} and no is ${No}` );

const getName=new String("Hitesh-hello-apple");
console.log(getName)
console.log(getName[0]);
//It comes key and value
console.log(getName.toUpperCase());
console.log(getName.toLowerCase());
console.log(getName.charAt(2));
console.log(getName.indexOf("H"))
//lastindex value does not add
const test1=getName.substring(0,2);
console.log(test1)

const test2=getName.slice(0,2);
console.log(test2)

const test3="  holiy   "
console.log(test3.trim())

console.log(getName.split("-"))
 
// ------------------Number and Math--------------------------

const score=400
console.log(score)

const amount=new Number(9000)
console.log(amount)
// console.log(amount.toString().length)
console.log(amount.toFixed(3))


const otherNo=201.8966;
console.log(otherNo.toPrecision(3));

const partNo=1000000;
console.log(partNo.toLocaleString("en-In"))

//++++++++++++++++++++++++Math+++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-7));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.max(1,20,45))
// console.log(Math.min(1,20,45))

const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min)