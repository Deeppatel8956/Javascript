
const p1=20
const p2=30
let toral=p1+p2
document.getElementById('demo3').innerHTML=toral


const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
document.getElementById('demo4').innerHTML=pi + "<br>" +person +"<br>" + answer

let carName = "Volvo";
document.getElementById("demo5").innerHTML = carName;

// Arithmetic operater
console.log(7+8)
console.log(7-8)
console.log(7*8)
console.log(7%8)
console.log(7/8)
// console.log(++8)
// console.log(--8)

// Assignment
console.log(7+8)
// console.log(7+=8)
// console.log(7-=8)
// console.log(7*=8)
// console.log(7/=8)
// console.log(7%=8)

// String Concatenation
document.write("Jhoneed" + " "+"don")
let str1="coed"
let str2="name"
let  str3=str1.concat(str2)
console.log(str3)
console.log(`${str1} ${str2}`)

const man={
    age:40,
    city:"Mumbai"
}
document.getElementById('dog').innerHTML=man.age+ "<br>"+ man.city


document.getElementById('add').innerHTML=16+4+"hell"
let vovlo=null

const persones = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };
  
  // Display some data from the object:
  document.getElementById("obj").innerHTML =
  persones["firstName"] + " " + persones["lastName"];


  const personed = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullname:function(){
        return this.firstName+" "+this.id
    }
};
document.getElementById('doh').innerHTML=personed.fullname()

function displaydate() {
    document.getElementById('now').innerHTML=Date()
}

var y = "We are the so-called \"Vikings\" from the north.";

document.getElementById("one").innerHTML = x + "<br>" + y


let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
let replace_Newword=text.replace("locate","hello").toUpperCase()
let lowewr_Word=text.toLowerCase()
console.log(lowewr_Word)
console.log(replace_Newword)
console.log(index)

//  global (/g) search for the letters "ain" (/ain) in a string
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
console.log(res)
