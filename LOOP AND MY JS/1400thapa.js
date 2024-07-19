function findletter(str,sub) {
    if (sub.length > str.length) {
        return false
    }

    for(let i=0;i<=sub.length;i++){
        if(str[i]===sub[i]){
            return true
        }
        return false
    }
    return str

}
console.log(findletter("hello","he"))


function miden(arr) {
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mide=Math.floor(len/2)

    if (len%2==0) {
        return arr[mide]+arr[mide+1]/2
    } else {
        return arr[mide]
    }
}
console.log(miden([1,2,3,5,4]))

function mode(arr) {
    let count={}
    let miaximum=0
    let mode
    for(let first of arr) {
        count[first]=(count[first]||0)+1
        if (count[first] > miaximum) {
            miaximum=count[first]
            mode=first
        }
    }
    return mode
}
console.log(mode([1,2,3,4,5,6,7]))

function findlength(arr) {
  let t={}
  for(let first of arr) {
    if (t[first]) {
        t[first]++
    } else {
        t[first]=1
    }
  }    
  return t
}
console.log(findlength([1,2,3,1,3,2,1,2,3]))

function findcheckletter_Twosstr(word,char) {
    word=word.toLowerCase()
    char =char.toLowerCase()
    let e=word.split("").reduce((acc,cur)=>{
        if (cur==char) {
            acc++
        } 
        return acc
    },0)
    return e
}
console.log("two",findcheckletter_Twosstr('Mission',"I"))


function powerOf(num) {
    let t=false
    for(let i=1;i<=num;i++){
       if (2**i==num) {
          t=true
       }
    }
    return t
}
console.log(powerOf(8))


function findletter1(str) {
    str=str.trim().split(" ")
    let r=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    return r.join(" ")
}
console.log(findletter1("hello god"))

function Value_atob2(a,b) {
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(Value_atob2(-1,2))


function calculate_Str(str,num) {
    if (num==0||num==1) {
        return str
    } else {
       return str+calculate_Str(str,num-1)     
    }
    
}
console.log(calculate_Str('abc',4))

function Value_atob3(a,b,arr=[]) {
    if (a<=b) {
        arr.push(a)
        return Value_atob2(a+1,b,arr)
    }
    return arr
}
console.log(Value_atob3(-4,2))

function factorial(num) {
    let fac=1
    for(let i=1;i<=num;i++){
        fac=fac*i
    }
    return fac
}
console.log(factorial(4))

function fibanaci(num) {
    if (num==0||num==1) {
        return num
    } else {
     return fibanaci(num-1)+fibanaci(num-2)        
    }
}
console.log(fibanaci(5))

function findmax(arr) {
    var max=arr[0]
    for(let i=0;i<arr.length;i++){
        if (arr[i] > max) {
            max=arr[i]
        }
    }
    return max
    // return Math.max(...arr)
}
console.log(findmax([100,2]))

function vowel(str) {
    let  vc=["a","e","i","o","u"]
    return str.split("").reduce((acc,cur)=>{
        return vc.includes(cur)?acc+1:acc
    },0)
}
console.log(vowel("hello"))

function sumof_Squre(arr) {
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sumof_Squre([1,2,3]))

function truncate_Str(str,n) {
    return n < 0 ? str:str.slice(0,n).concat('...')
}
console.log(truncate_Str("trjbbjv",2))

function calculate_Digites(num) {
    let sum=0
    while (num > 0) {
        let ra=num%10
        sum+=ra
        num=Math.floor(num/10)
    }
    return sum
}
console.log(calculate_Digites(1234))

function  checkcapital(str) {
    if (str.charCodeAt(0)>=65 && str.charCodeAt(0)< 95) {
        return true
    }
    return false
}
console.log(checkcapital("d"))

function sum_Arr(arr,target) {
    var t=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]==target) {
                t.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return t
}
let arr20=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(sum_Arr(arr20,target))

function findavr(params) {
    var t=0
    for(let i=0;i<params.length;i++){
        t+=params[i]
    }
    return t/params.length
}
console.log(findavr([10,20]))

function ispalindrome(str) {
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str==r?true:false
}
console.log(ispalindrome('lool'))

function anagaram(s1,s2) {
    var s1=s1.toLowerCase()
    var s2=s2.toLowerCase()
    return s1.split("").sort().join("")===s2.split("").sort().join("")
}
console.log(anagaram("Mary","Army"))

function combindtwo(arr1,arr2) {
    var s=arr1.some((ele)=>arr2.includes(ele))
    return s
}
console.log(combindtwo([1,2],[1,2]))

function random() {
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(random())

function longword(str) {
    if (str.length==0) {
        return false
    }
    str=str.split("")
    str=str.sort((a,b)=>b.length-a.length)
    return str.at(-1)
}
console.log(longword("bhubhbh jhbgyvtfvgb"))

function capital2(str) {
    if (str.length < 0) {
        return false
    }
    str=str.split("")
    str=str.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return str.join("")
}
console.log(capital2("god hello"))

function rever_str(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(rever_str("hello js",""))

let arr3=[1,2]
let df=2
let f=arr3.filter((ele)=>ele!=df)
console.log(f)

let days=["monady","sunday"]
for(let day of days) {
    day=day.charAt(0).toUpperCase()+day.slice(1)
    console.log(day)
}

let arr6=["ban","Apple","orange"]
arr6.map((ele)=>console.log(ele.replace(/ban/g,"")))

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let tr=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
let kj=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(tr)
console.log(kj)

let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let tf=[...arrd.slice(0,deleteAt),...arrd.slice(deleteAt+1)]
console.log(tf)

function Rt(arr) {
    return arr.filter((index,item)=>arr.indexOf(index)==item)
}
console.log(Rt([1,2,3,1,3]))

function Rte(arr) {
    return arr.filter((index,item)=>arr.indexOf(index)!=item)
}
console.log(Rte([1,2,3,1,3]))