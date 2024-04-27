const strnum=(str,num)=>{
    return num > 0?str.repeat(num):str
}
console.log(strnum("abc",5))

const strnum2=(str,num)=>{
    let result=''
    for(let i=1;i<=num;i++){
        result+=str
    }
    return result
}
console.log(strnum2("abc",5))

const strnum3=(str,num)=>{
    return Array(num).fill(str).join("")
}
console.log(strnum3("abc",5))

// rescurtion
const strnum4=(str,num)=>{
    if(num < 0){
        return ""
    }else if (num==1) {
        return str
    }else{
        return str+strnum4(str,num-1)
    }
}
console.log("rescurtion",strnum4("abc",5))

function repeate(p,n) {
    var a=[]
    while (a.length < n) {
        a.push(p)
    }
    return a.join(" ")
}
console.log('repeate',repeate("abc",5))
