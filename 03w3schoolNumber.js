let x = 0.2 + 0.1;
document.getElementById("demo").innerHTML = "0.2 + 0.1 = "+x
let y = (0.2*10 + 0.1*10) / 10;
document.getElementById("demo2").innerHTML="02*10+0.1*10 ="+y
let a1=10
let a2=20
document.getElementById('demo3').innerHTML=a1+a2
d="100"
v="200"
document.getElementById('demo4').innerHTML=d+v
k=200
l=400
document.getElementById('demo5').innerHTML=k+l+"100"
let x1 = "100";
let y1 = "10";
let z = x / y;
document.getElementById('demo6').innerHTML=z
g="100"
p="20"
document.getElementById('demo7').innerHTML=g*p
document.getElementById('demo8').innerHTML=g-p
document.getElementById("demo9").innerHTML = 100 / "Apple";
document.getElementById("demo10").innerHTML = 100 / "10";
let a3=100/"Apple"
document.getElementById('demo11').innerHTML=isNaN(a3)

// If you use NaN in a mathematical operation, the result will also be NaN:
let x4 = NaN;
let y5 = 5;
document.getElementById("demo11").innerHTML = x4 + y5;

document.getElementById('demo12').innerHTML=typeof NaN

// Infinity is returned if you calculate a number outside the largest possible number:
var number=3
var tst=""
while (number!=Infinity) {
    number=number*number
    tst=tst+number+"<br>"
}
document.getElementById('demo13').innerHTML=tst


let x6 = 2/0;
let y6 = -2/0;
document.getElementById("demo14").innerHTML = x6 + "<br>"+y6


// Numeric constants, preceded by 0x, are interpreted as hexadecimal:
let x7 = 0xFF;
document.getElementById("demo15").innerHTML = "0xFF = " + x7;



// The toString() method can output numbers from base 2 to 36:
let myNumber = 32;
document.getElementById("demo16").innerHTML =
"Decimal 32 = " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);


//----- JavaScript Number Methods -----

// q1
// The toExponential() method returns a string, with the number rounded and written using exponential notation.

// An optional parameter defines the number of digits behind the decimal point.
let x8 = 9.656;
document.getElementById("demo17").innerHTML =
  x8.toExponential() + "<br>" + 
  x8.toExponential(2) + "<br>" + 
  x8.toExponential(5) + "<br>" + 
  x8.toExponential(6);

//q2 The valueOf() method returns a number as a number  
document.getElementById('demo18').innerHTML=(123).valueOf()+"<br>"+(100+23).valueOf()

// q3 The toFixed() method rounds a number to a given number of digits.
let x10 = 9.656;
document.getElementById("demo19").innerHTML =
  x10.toFixed(0) + "<br>" +
  x10.toFixed(2) + "<br>" +
  x10.toFixed(4) + "<br>" +
  x10.toFixed(6);

// q4 The toPrecision() method returns a string, with a number written with a specified length:
let num = 5.123456;
document.getElementById('demo20').innerHTML=num.toPrecision(2)  

document.getElementById("demo21").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");


let u=new Date()
document.getElementById('demo22').innerHTML=Number(u)   

document.getElementById("demo23").innerHTML=Number.parseInt("10")

document.getElementById('demo24').innerHTML=Number.parseFloat("10.265252")


// The largest possible number in JavaScript is:
let x12 = Number.MAX_VALUE;
let x13=Number.MIN_VALUE;
document.getElementById("demo25").innerHTML = x12;
document.getElementById("demo26").innerHTML = x13;

let new_POSITIVE_INFINITY=Number.POSITIVE_INFINITY;
let newdivided_POSITIVE_INFINITY=1/0;
document.getElementById('demo27').innerHTML=new_POSITIVE_INFINITY
document.getElementById('demo28').innerHTML=newdivided_POSITIVE_INFINITY

let new_NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY
let newdivided_NEGATIVE_INFINITY=-1/0
document.getElementById('demo29').innerHTML=new_NEGATIVE_INFINITY
document.getElementById('demo30').innerHTML=newdivided_NEGATIVE_INFINITY


// Using a Number property on a variable, or value, will return undefined:
let usingvariable_MAXVALUE=6
document.getElementById('demo31').innerHTML=usingvariable_MAXVALUE.MAX_VALUE

