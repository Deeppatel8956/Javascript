const remove=(arr)=>{
    return arr.filter((index,item)=>arr.indexOf(index)===item)
}
console.log(remove([1,2,3,4,2,1]))

const sum=(arr)=>{
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sum([1,2,3]))

const random=()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(random())

const anagaram=(a,b)=>{
    a=a.toLowerCase()
    b=b.toLowerCase()
    return a.split("").sort().join("")===b.split("").sort().join("")
}
console.log(anagaram("mary","army"))

const ispalindrome=(str)=>{
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str===r?true:false
}

const powerOf=(n)=>{
    let op=false
    for(let i=1;i<=n;i++){
        if (2**i==n) {
            op=true
        }
    }
    return op
}

const fibanaci=(num)=>{
    if (num==0||num==1) {
        return num
    } else {
     return fibanaci(num-1)+fibanaci(num-2)        
    }
}
console.log(fibanaci(5))

const findmiden=(arr)=>{
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mid=Math.floor(len/2)

    if (len%2==0) {
        return arr[mid]+arr[mid+1]/2
    } else {
        return arr[mid]
    }
}
console.log(findmiden([1,2,3,4,5]))

const findmax=(arr)=>{
    // return arr.reduce((acc,cur)=>{
    //     return acc > cur ?acc:cur
    // },0)
    return Math.max(...arr)
}
console.log(findmax([100,3,10,50]))

const findmode=(arr)=>{
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

console.log(findmode([1,2,3,4,5,6]))

const findlength=(arr)=>{
    let count=[]
    for(let first of arr) {
        if (count[first]) {
            count[first]++
        } else {
            count[first]=1
        }
    }
    return count
}
console.log(findlength([1,2,3,1,2,3]))

const sumof_Squre=(num)=>{
    let sum=0
    while (num > 0) {
        let random=num%10
        sum+=random
        num=Math.floor(num/10)
    }
    return sum
}
console.log(sumof_Squre(1234))

const findsubstr=(str,sub)=>{
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
console.log(findsubstr("hello","he"))

const truncate_Str=(str,n)=>{
    return n < 0?str:str.slice(0,n).concat('...')
}
console.log(truncate_Str("jvgfcgvgh",2))

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
console.log(Value_atob3(-1,2))

const count_Word=(word,cur)=>{
    word=word.toLowerCase()
    cur=cur.toLowerCase()
    let c=word.split(" ").reduce((acc,cure)=>{
        if (cure===cur) {
            acc++
        }
        return acc
    },0)
    return c
}
console.log(count_Word("Missioni","I"))

const capitalfirst=(str)=>{
    str=str.trim().split(" ")
    let v=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1)
        }
    })
    return v.join(" ")
}
console.log(capitalfirst("hello god"))

const revers_Sentence=(str,pair)=>{
    return str.split(pair).reverse().join(pair)
}
console.log(revers_Sentence("hello god",""))

const Target_Sum=(arr,target)=>{
    let r=[]
    for (let index = 0; index < arr.length; index++) {
        for (let jndex = index+1; jndex < arr.length; jndex++) {
            if (arr[index]+arr[jndex]===target) {
                r.push(`(${arr[index]},${arr[jndex]})`)
            }   
        }        
    }
    return r
}
arr=[1,2,3,4,5,6,7,8,9,10]
target=11
console.log(Target_Sum(arr,target))

const vowe=(vow)=>{
    let vos=["a","e","i","o","u"]
    return vow.split("").reduce((acc,cur)=>{
        return vos.includes(cur)?acc+1:acc
    },0)
}
console.log(vowe("hello"))

const some=(a1,a2)=>{
    let b=a1.some((le)=>a2.includes(le))
    return b
}
console.log(some([1,2],[1,2]))

const factorial=(n)=>{
    if (n <0 ) {
        return false
    }
    if (n==0||n==1) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}
console.log(factorial(3))

const factorial2=(n)=>{
    let fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial2(3))

let c=4
let str=''
for(let i=0;i<c;i++){
    for(let j=0;j<i;j++){
        str+="*"
    }
    str+="\n"
}
console.log(str)

const longword=(str)=>{
    if (str.trim().length==0) {
        return false
    }
    str=str.split(" ")
    str=str.sort((a,b)=>a.length-b.length)
    return str.at(-1)
}
console.log(longword("bhvgyfgv"))

const capital=(str)=>{
    if (str.length < 0) {
        return false
    }
    str=str.split("")
    str=str.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return str.join("")
}
console.log(capital("god of monster"))

let day=["monday","sunday"]
for(let days of day) {
    days=days.charAt(0).toUpperCase()+days.slice(1)
    console.log(days)
}

const cmle_Case=(str)=>{
    if (str.charCodeAt(0)>=65&&str.charCodeAt(0)<=95) {
        return true
    }
    return false
}
console.log(cmle_Case("k"))

let ad=[1,2,3,4,5]
let elem=5
let answer=ad.filter((ele)=>ele!==elem)
console.log(answer)

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let tr=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
let tx=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(tx)
console.log(tr)

let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let d=[...arrsd.slice(0,deleteAt),...arrsd.slice(deleteAt)]
console.log(d)


let arr6=["ban","Apple","orange"]
arr6.map((ele)=>console.log(ele.replace(/ban/g,"")))