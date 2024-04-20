const reverse_Word=(str)=>{
    let r_str=""
    for(var i=str.length-1;i>=0;i--){
        r_str+=str[i]
    }
    return r_str
}
console.log(reverse_Word("gold"))

// 2nd method
const reverse_Word2=(str)=>{
    return str.split("").reverse().join("")
}
console.log(reverse_Word2("dog"))

// 3rd method
const reverse_Word3=(str,pair)=>{
  return str.split(pair).reverse().join(pair)
}
console.log(reverse_Word3("cold",""))

function reverse_Word4(str) {
    if (str=="") {
        return ""
    } else {
        return reverse_Word4(str.substr(1))+str.charAt(0)
    }
}
console.log(reverse_Word4("hello"))
function reverse_Word5(str) {
    var total=str.split("").reduce((accum,cur)=> cur+accum,"")
    return total
}
console.log(reverse_Word5("god"))