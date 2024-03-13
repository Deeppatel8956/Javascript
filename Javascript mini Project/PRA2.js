function isstr(str) {
    let j=str.split('').reverse().join('')
    if (j==str) {
        return "palindrone"
    }else{
        return "not palindrome"
    }
}
console.log(isstr("lool"))

let day=["monday","tuesday","sunday"]
for(let dayes of day) {
    dayes=dayes.charAt(0).toUpperCase()+dayes.substring(1)
    console.log(dayes)
}