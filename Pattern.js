let n=8;
let str=''
for (let index = 0; index <=n; index++) {
    
    for(let j=0;j<=index;j++){
        str +='*';
    }
    str +='\n';
    
}
console.log(str)
let m=10;
let s='';
for (let index = 0; index < m; index++) {
    for (let j = 1; j < m-index; j++) {
                 s +='*'
        
    }
             s +='\n'
    
}
console.log(s)

function cont(num1) {
    console.log(num1)
    const num2=num1-1;
    if(num2){
        cont(num2)
    }
}
console.log(cont(9))
let o = 15;
let string = "";
// External loop
for (let i = 1; i <= o; i++) {
  // printing spaces
  for (let j = 1; j <= o - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



let p=5;
let r=""
for (let i = 1; i <= p; i++) {
    for (let j = 1; j <=p-i; j++) {
        r+=''
        
    }
    for (let k = 1; k <2*i-1; k++) {
        r+="*"
        
    }
    r+="\n"
    
}
console.log(r)