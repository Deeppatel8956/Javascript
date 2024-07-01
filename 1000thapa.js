const remove2=(arr)=>{
    return arr.filter((index,item)=>arr.indexOf(index)===item)
}
console.log(remove2([1,2,3,4,2,1]))

const sum=(arr)=>{
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sum([1,2,3]))
const sum2=(arr)=>{
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sum2([1,2,3]))

const random2=()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(random2())

const anagaram2=(d,m)=>{
    d=d.toLowerCase()
    m=m.toLowerCase()
    return d.split("").sort().join("")==m.split("").sort().join("")
}
console.log(anagaram2("Mary","Army"))

const ispalindrome2=(str)=>{
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str==r?true:false
}
console.log(ispalindrome2('lool'))
const powerOf2=(n)=>{
    let op=false
    for(let i=1;i<=n;i++){
        if (2**i==n) {
            op=true
        }
    }
    return op
}
console.log(powerOf2(8))

const fibanaci2=(num)=>{
    if (num==0||num==1) {
        return num
    } else {
      return fibanaci2(num-1)+fibanaci2(num-2)        
    }
}
console.log(fibanaci2(8))

const findmiden2=(arr)=>{
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
const findmode2=(arr)=>{
    let coutn={}
    let maximu=0
    let mode

    for(let first of arr) {
        coutn[first]=(coutn[first]||0)+1
        if (coutn[first] > maximu) {
            maximu=coutn[first]
            mode=first
        }
    }
    return mode
}
console.log(findmode2([1,2,3,4,5,6]))
const findlength2=(arr)=>{
    let count={}
    for(let first of arr) {
        if (count[first]) {
            count[first]++
        } else {
            count[first]=1
        }
    }
    return count
}
console.log(findlength2([1,2,3,1,2,3]))

const sumof_Squre2=(num)=>{
    let sum=0
    while (num > 0) {
        var random =num%10
        sum+=random
        num=Math.floor(num/10)
    }
    return sum
}
console.log(sumof_Squre2(1234))

const findsubstr2=(str,sub)=>{
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
console.log(findsubstr2("hello","he"))

const maximum=(arr)=>{
    return Math.max(...arr)
}
console.log(maximum([100,20,1000]))

const truncate_Str2=(str,n)=>{
    return n <0 ?str:str.slice(0,n).concat('...')
}
console.log(truncate_Str2("jvgfcgvgh",2))

const Value_atob4=(a,b)=>{
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(Value_atob4(-3,2))

const Value_atob5=(a,b,arr=[])=>{
    if (a<=b) {
        arr.push(a)
        return Value_atob5(a+1,b,arr)
    }
    return arr
}
console.log(Value_atob5(-2,2))

const count_Word2=(word,str)=>{
    word=word.toLowerCase()
    str=str.toLowerCase()
    let d=word.split("").reduce((acc,cur)=>{
        if (cur==str) {
            acc++
        }
        return acc
    },0)
    return d
}
console.log(count_Word2("Missioni","I"))

const capitalfirst2=(str)=>{
    str=str.trim().split("")
    let u=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1)
        }
    })
    return u.join("")
}
console.log(capitalfirst2("hello god"))
const Target_Sum2=(arr,target)=>{
    let r=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target) {
                r.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return r
}

const vowe2=(vow)=>{
    let vos=["a","e","i","o","u"]
    return vow.reduce((acc,cur)=>{
        return vos.includes(cur)?acc+1:acc
    },0)
}
console.log(vowe2("hello"))

const some2=(s1,s2)=>{
    let r=s1.some((ele)=>s2.includes(ele))
    return r
}
console.log(some([1,2],[1,2]))

const factorial3=(num)=>{
    if (num < 0) {
        return false
    }

    if (num==0||num==1) {
        return 1
    } else {
        return num*factorial3(num-1)
    }
}
console.log(factorial3(2))

const factorial4=(num)=>{
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial4(2))

let c1=4
let str2=''
for(let i=0;i<c1;i++){
    for(let j=0;j<i;j++){
        str+="*"
    }
    str+="\n"
}
console.log(str)

const capital_Uppercase=(str)=>{
    if (str.charCodeAt(0)>=65&&str.charCodeAt(0)<=95) {
        return true
    }
    return false
}
console.log(capital_Uppercase("r"))

let dayed=["monday","tuesday"]
for(let day of dayed) {
    day=day.charAt(0).toUpperCase()+day.slice(1)
    console.log(day)
}

let arr=[1,2,3]
let els=2
let re_Answer=arr.filter((ele)=>ele!==els)
console.log(re_Answer)

const longword2=(str)=>{
    if (str.trim().length < 0) {
        return false
    }
    str=str.split("")
    str=str.sort((a,b)=>b.length-a.length)
    return str.at(-1)
}
console.log(longword2("bhvgyfgv"))
const capital2=(str)=>{
    if (str.length < 0) {
        return false
    }
    str=str.split(" ")
    str=str.replace((cur)=>cur[0],cur[0].toUpperCase())
    return str.join(" ")
}
console.log(capital2("god of monster"))

let arrd2=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace2=1
let ele2=45
let rt=[...arrd2.slice(0,replace2),ele2,...arrd2.slice(replace2+1)]
let tr2=[...arrd2.slice(0,replace2),ele2,...arrd2.slice(replace2)]
console.log(rt)

let arrsd2=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt2=1
let r_Delete=[...arrsd2.slice(0,deleteAt2),...arrsd2(deleteAt2+1)]
console.log(r_Delete)

let arr2=["ban","Apple","orange"]
arr2.map((ele)=>console.log(ele.replace(/ban/g,"")))
