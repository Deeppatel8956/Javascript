const remoe=(arr)=>{
    return arr.filter((index,item)=>arr.indexOf(index)===item)
}
console.log(remoe([1,1,2,3,1,2,3]))

function voeweled(vowe) {
    let vopwels=["a","e","i","o","u"]
    return vowe.split("").reduce((acc,cur)=>{
        return vopwels.includes(cur)?acc+1:acc
    },0)
}
console.log(voeweled("eeiou"))

function powerOf(p) {
    let op=false
    for(let i=1;i<=p;i++){
        if (2**i==p) {
            op=true
        }
    }
    return op
}
console.log(powerOf(8))

function findmiden(params) {
    params=params.sort((a,b)=>a-b)
    let len=params.length
    let mid=Math.floor(len/2)

    if (len%2==0) {
        return params[mid]+params[mid+1]/2
    } else {
        return params[mid]
    }
}
console.log(findmiden([1,2,3,4,5]))

function findmode(params) {
    let cont={}
    let maximum=0
    let mode

    for(let first of params) {
        cont[first]=(cont[first]||0)+1
        if (cont[first]>maximum) {
            maximum=cont[first]
            mode=first
        }
    }
    return mode
}
console.log(findmode([1,2,3]))

function findlength(params) {
    let t={}
    for(let first of params) {
        if (t[first]) {
            t[first]++
        } else {
            t[first]=1
        }
    }
    return t
}
console.log(findlength([1,2,3,1,3,2,3,4,6,6,0]))

function anagaram(p,p2) {
    p=p.toLowerCase()
    p2=p2.toLowerCase()
    return p.split("").sort().join("")===p2.split("").sort().join("")
}
console.log(anagaram("Mary","Army"))


function ispalindrome(params) {
    let r=params.toLowerCase()
    return params==r?true:false
}
console.log(ispalindrome("lool"))

function fibanaci(num) {
    if (num==0||num==1) {
        return num
    } else {
        return fibanaci(num-1)+fibanaci(num-2)
    }
}
console.log(fibanaci(5))

function Some_vale(arr1,arr2) {
    let v=arr1.some((ele)=>arr2.includes(ele))
    return v
}
console.log(Some_vale([1,2],[1,2]))

function sumofsqure(arr) {
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sumofsqure([1,2,3]))

function Value_atob(a,b,arr=[]) {
    if (a<=b) {
        arr.push(a)
        return Value_atob(a+1,b,arr)
    }
    return arr
}
console.log(Value_atob(-1,1))

function Num2(a,b) {
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(Num2(-1,1))

function Add(str,num) {
    if (num==0||num==1) {
        return str
    } else {
    return str+Add(str,num-1)        
    }
}
console.log(Add("abc",2))

function randomColor(params) {
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}

function truncatest(str,n) {
    return n <0 ? str :str.slice(0,n).concat('...')
}
console.log(truncatest("jbewuheiufhfr",2))

function ca_Upper(params) {
    if (params.charCodeAt(0)>=65&&params.charCodeAt(0)<=95) {
        return true
    }
    return false
}
console.log(ca_Upper("d"))

function sumof(num) {
    let  sum=0
    while (num > 0) {
        let random=num%10
        sum+=random
        num=Math.floor(num/10)
    }
    return sum
}
console.log(sumof(1234))

function sentence(params) {
    params=params.trim().split(" ")
    let u=params.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        }else{
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    return u.join(" ")
}
console.log(sentence("hello god"))

function countword(word,char) {
    word=word.toLowerCase()
    char=char.toLowerCase()
    let u=word.split("").reduce((acc,cur)=>{
        if (cur==char) {
            acc++
        }
        return acc
    },0)
    return u
}
console.log(countword("hello","l"))

function findmax(params) {
    return Math.max(...params)
}
console.log(findmax([1,200,2,3,4,5,0,]))


function checkstr(str,sub) {
    if (sub.length > str.length) {
        return false
    }

    for(let i=0;i<=sub.length;i++){
        if (str[i]==sub[i]) {
            return true
        }
        return false
    }
    return str
}
console.log(checkstr("hello","he"))

function londword(params) {
    if (params.trim().length==0) {
        return false
    }

    params=params.split(" ")
    params=params.sort((a,b)=>a.length-b.length)
    return params.at(-1)
}
console.log(londword("hello hjbehge"))

function Allcapital(params) {
    if (params.length<0) {
        return false
    }
    params=params.split(" ")
    params=params.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return params.join(" ")
}
console.log(Allcapital("mr hgvh mn hv"))

function factorial(params) {
    if (params < 0) {
        return false
    }

    if (params==0||params==1) {
        return 1
    } else {
        return params*factorial(params-1)
    }
}
console.log(factorial(5))

function factorial2(params) {
    let fact=1
    for(let i=1;i<=params;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial2(5))

let c=5
let str=''
for(let i=0;i<c;i++){
    for(let j=0;j<i;j++){
        str+='*'
    }
    str+='\n'
}
console.log(str)


function newSum(params,target) {
    let p=[]
    for (let i = 0; i <params.length; i++) {
        for (let j = i+1; j <params.length; j++) {
            if (params[i]+params[j]==target) {
                p.push(`(${params[i]},${params[j]})`)
            }
        }
    }
    return p
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(newSum(arr,target))

const dayes=["monday","tuesday","friday","sunday"]
for(let days of dayes) {
   days=days.charAt(0).toUpperCase()+days.slice(1).toLowerCase()
   console.log(days)
}

function revers_Sentence(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(revers_Sentence("hello god ",""))

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let tu=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
let bu=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(tu)

let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let f=[...arrsd.slice(0,deleteAt),...arrsd.slice(deleteAt+1)]
console.log(f)

let arr5=[1,2,3,4,5,6,7,8,6,97,1,3]
let elem=2
let o=arr5.filter((el)=>el!==elem)
console.log(o)

let arr6=["ban","Apple","orange"]
arr6.map((el)=>{
    console.log(el.replace(/ban/g,''))
})
