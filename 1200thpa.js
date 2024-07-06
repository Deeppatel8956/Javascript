const findletter=(str,sub)=>{
    if (sub.length >str.length) {
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
console.log(findletter("hello","he"))

const vowels=(vow)=>{
    let vo=["a","e","i","o","u"]
    return vow.split("").reduce((acc,cur)=>{
        return vo.includes(cur)?acc+1:acc
    },0)
}
console.log(vowels("hello"))

const capital=(str)=>{
    if(str.charCodeAt(0)>=65 &&str.charCodeAt(0)<=95){
        return true
    }
    return false
}
console.log(capital("g"))

const truncate_Str=(str,n)=>{
    return n <0 ?str:str.slice(0,n).concat('...')
}
console.log(truncate_Str('testjs',2))

const powerOf=(n)=>{
    let p=false
    for(let i=1;i<=n;i++){
        if (2**i==n) {
            p=true

        }

    }
    return p
}

console.log(powerOf(8))

const fibanaci=(num)=>{
    if (num==0||num==1) {
        return num
    } else {
       return fibanaci(num-1)+fibanaci(num-2)     
    }
}
console.log(fibanaci(5))

const Value_atob2=(a,b)=>{
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(Value_atob2(-1,2))

const Value_atob3=(a,b,arr=[])=>{
    if (a<=b) {
        arr.push(a)
        return Value_atob3(a+1,b,arr)
    }
    return arr
}
console.log(Value_atob3(-4,2))

const sumof_Squre=(n)=>{
    let sum=0
    while ( n > 0) {
        let random=n%10
        sum+=random
        n=Math.floor(n/10)
    }
    return sum
}
console.log(sumof_Squre(1234))

const sum=(arr)=>{
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sum([1,2,3,4]))

const count_Word=(word,cur)=>{
    word=word.toLowerCase()
    cur=cur.toLowerCase()
    let c=word.split("").reduce((acc,cure)=>{
        if (cure===cur) {
            acc++
        }
        return acc
    },0)
    return c
}
console.log(count_Word("Missioni","I"))

const first_Word=(str)=>{
    str=str.trim().split(" ")
    let c=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1)
        }
    })
    return c.join(" ")
}
console.log(first_Word("hello god"))

const some_Array=(arr1,arr2)=>{
    let t=arr1.some((ele)=>arr2.includes(ele))
    return t
}
console.log(some_Array([1,2],[1,2]))

const avarge=(arr)=>{
    let c=arr.reduce((acc,cur)=>acc+cur,0)
    return c/arr.length
}
console.log(avarge([10,20]))

const findmax=(arr)=>{
    return Math.max(...arr)
}
console.log(findmax([100,2000,300,4000]))

const findmiden=(arr)=>{
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mide=Math.floor(len/2)

    if (len%2==0) {
        return arr[mide]+arr[mide+1]/2
    } else {
        return arr[mide]
    }
}
console.log(findmiden([1,2,3,4,5]))

const findemode=(arr)=>{
    let count={}
    let maximu=0
    let mode
    for(let first of arr) {
        count[first]=(count[first]||0)+1
        if (count[first] > maximu) {
            maximu=count[first]
            mode=first
        }
    }
    return mode
}
console.log(findemode([1,2,3,4,5,6]))

const findlength=(arr)=>{
    let coount={}
    for(let first of arr) {
        if (coount[first]) {
            coount[first]++
        } else {
            coount[first]=1
        }
    }
    return coount
}
console.log(findlength([1,2,3,1,2,3]))

const sum_Target=(arr,target)=>{
    let r=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]==target) {
                r.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return r
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(sum_Target(arr,target))

let c1=4
let str=''
for(let i=0;i<c1;i++){
    for(let j=0;j<i;j++){
        str+='*'
    }
    str+='\n'
}
console.log(str)

const ispalindrome=(str)=>{
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str==r?true:false
}
console.log(ispalindrome('lol'))

const anagaram=(a1,a2)=>{
    return a1.toLowerCase().split("").sort().join("")===a2.toLowerCase().split("").sort().join("")
}
console.log(anagaram("Army","Mary"))

const arred=[1,2,3]
let dl=2
let ret=arred.filter((ele)=>ele!==dl)
console.log(ret)

let dayed=["monday","tuesday"]
for(let day of dayed) {
    day=day.charAt(0).toUpperCase()+day.slice(1)
    console.log(day)
}

const longword=(str)=>{
    if (str.trim().length==0) {
        return false
    }
    str=str.split(" ")
    str=str.sort((a,b)=>a.length-b.length)
    return str.at(-1)
}
console.log(longword("bhvgyfgv"))

const capital2=(str)=>{
    if (str.length < 0) {
        return false
    }
    str=str.split("")
    str=str.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return str.join("")
}
console.log(capital2("god of monster"))

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let rt=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
let tr=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(rt)
console.log(tr)


let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let de=[...arrd.slice(0,deleteAt),...arrd.slice(deleteAt+1)]
console.log(de)


let arr6=["ban","Apple","orange"]
arr6.map((ele)=>console.log(ele.replace(/ban/g,"")))

const factorial=(num)=>{
    if (num < 0) {
        return false
    }

    if (num==0||num==1) {
        return 1
    } else {
        return num*factorial(num-1)
    }
}
console.log(factorial(3))

const factorial2=(num)=>{
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial2(3))

const random=()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(random())

const remove=(arr)=>{
    return arr.filter((index,ietm)=>arr.indexOf(index)==ietm)
}
console.log(remove([1,2,3,4,2,1]))

const deremove=(arr)=>{
    return arr.filter((index,ietm)=>arr.indexOf(index)!==ietm)
}
console.log(deremove([1,2,3,4,2,1]))
