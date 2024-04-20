const checkstring=(str,sub)=>{
    var str=str
    var sub=sub

    if (str.startsWith(sub)) {
        return true
    } else {
        return false
    }
}
console.log(checkstring("hello","he"))

// 2nd method  using lastindexof 
const checkstring2=(str,sub)=>{
    var str=str
    var sub=sub
    // console.log(str.lastIndexOf(sub,0))
    var result=str.lastIndexOf(sub,0)==0
    if (result) {
        return true
    } else {
        return false
    }
    
}
console.log(checkstring2("hello","he"))

// 3rd method using slice
const Sub=(str,sub)=>{
    var str=str
    var sub=sub
    return str.toLowerCase().slice(0,sub.length)===sub.toLowerCase()?true:false
}
console.log(Sub("Hello world","he"))

const startwith=(str,sub)=>{
    return str.toLowerCase().startsWith(sub.toLowerCase())
}
console.log(startwith("Hello world","he"))

// 4th method
function sub_String(str,sub){
    var str=str.toLowerCase()
    var sub=sub.toLowerCase()
    if (sub.length > str.length) {
        return false
    }

  for(var i=0;i<sub.length;i++){
    if (str[i]===sub[i]) {
        return true
    }
    return false
  }
}
console.log("gold demo",sub_String("hello","he"))