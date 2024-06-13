const reove=(arr)=>{
    return arr.filter((index,item)=>arr.indexOf(index)===item)
}
console.log(reove([1,2,4,1,2,4]))

const fibanaci=(num)=>{
    if (num==0||num==1) {
        return num
    } else {
     return fibanaci(num-1)+fibanaci(num-2)        
    }
}
console.log(fibanaci(5))

const vowels=(vo)=>{
    let vc=["a","e","i","o","u"]
    return vo.split("").reduce((acc,cur)=>{
        return vc.includes(cur)?acc+1:acc
    },0)
}
console.log(vowels("hello"))

const findmiden=(arr)=>{
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mid=Math.floor(len/2)

    if (len%2===0) {
        return arr[mid]+arr[mid+1]/2
    } else {
        return arr[mid]
    }
}
console.log(findmiden([1,2,3,4,5,6]))

const findmode=(arr)=>{
    let count={}
    let maixmum=0
    let mode
    for(let first of arr) {
        count[first]=(count[first]||0)+1
        if (count[first] > maixmum) {
            maixmum=count[first]
            mode=first
        }
    }
    return mode
}
console.log(findmode([1,2,3,4,5,6]))

const Value_atob2=(a,b,arr=[])=>{
    if (a<=b) {
        arr.push(a)
        return Value_atob2(a+1,b,arr)
    }
    return arr
}
console.log(Value_atob2(-2,5))

const Value_atob3=(a,b)=>{
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(Value_atob3(-8,1))

const count_Str=(str,num)=>{
    if (num==0||num==1) {
        return str
    } else {
      return str+count_Str(str,num-1)       
    }
}
console.log(count_Str("abc",5))

const truncate_Str=(str,n)=>{
    return n < 0?str:str.slice(0,n).concat('...')
}
console.log(truncate_Str("kbdghgvhgvb",2))

const random=()=>{
    return`#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(random())

const factorial=(num)=>{
    if (num < 0) {
        return 'rewrite'
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
console.log(factorial2(4))

const powerOf=(n)=>{
    let op=false
    for(let i=1;i<=n;i++){
        op=true
    }
    return op
}
console.log(powerOf(8))

const findmx=(arr)=>{
    // return arr.reduce((pre,cur)=>{
    //     return pre > cur ?pre :cur
    // },0)
    return Math.max(...arr)
}
console.log(findmx([1002,200,3,4]))

const sumof_Squre=(arr)=>{
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sumof_Squre([1,2,3]))

const sum=(n)=>{
    let sum=0
    while (n > 0) {
        var random=n%10
        sum+=random
        n=Math.floor(n/10)
    }
    return sum
}
console.log(sum(1234))

let c=4
let str=''
for(let i=0;i<c;i++){
    for(let j=0;j<i;j++){
        str+='*'
    }
    str+='\n'
}
console.log(str)

const Target_Sum=(arr,target)=>{
    let h=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target) {
                h.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return h
}

let arr=[1,2,3,4,5,6,7,9,10]
let target=11
console.log(Target_Sum(arr,target))

const longword=(str)=>{
    if (str.trim().length==0) {
        return false
    }
    str=str.split(" ")
    str=str.sort((a,b)=>a.length-b.length)
    return str.at(-1)
}
console.log(longword("hvghvghgvghvhg"))

const capital=(str)=>{
    if (str.charCodeAt(0)>=65&&str.charCodeAt(0)<=95) {
        return true
    }
    return false
}
console.log(capital("b"))

const Uppca=(str)=>{
    if (str.lengthc<0) {
        return false
    }
    str=str.split(" ")
    str=str.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return str.join(" ")
}
console.log(Uppca("bhvhg jhbhuvb"))

const anagaram=(s1,s2)=>{
   var e=s1.toLowerCase()
    var d=s2.toLowerCase()
    return e.split("").sort().join("")==d.split("").sort().join("")
}
console.log(anagaram('Mary','Army'))

const ispalindrome=(str)=>{
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str==r?true:false
}
console.log(ispalindrome('lool'))

let day=["monday","friday"]
for(let days of day) {
    days=days.charAt(0).toUpperCase()+days.slice(1)
    console.log(days)
}


const sentence=(str)=>{
    str=str.trim().split(" ")
    let y=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        }else{
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    return y.join(" ")
}
console.log(sentence("hello god"))

const count_Word=(word,char)=>{
    word=word.toLowerCase()
    char=char.toLowerCase()

    let d=word.split("").reduce((acc,cur)=>{
        if (cur==char) {
            acc++
        }
        return acc
    },0)
    return d
}
console.log(count_Word("Missioni","I"))

const findlength=(arr)=>{
    let coun={}
    for(let first of arr) {
        if (coun[first]) {
            coun[first]++
        } else {
            coun[first]=1
        }
    }
    return coun
}
console.log(findlength([1,2,3,1,2,3]))

const findsubstr=(str,sub)=>{
    if (sub.length > str.length ) {
        return false
    }

    for (let index = 0; index < sub.length; index++) {
        if (str[index]==sub[index]) {
            return true
        }
        return false
    }
    return str
}
console.log(findsubstr("hello","he"))

const combindarr=(arr1,arr2)=>{
    let v=arr1.some((ele)=>arr2.includes(ele))
    return v
}
console.log(combindarr([1,2],[1,2]))

let num_Arr=[1,2,3]
let elem=2
let answer=num_Arr.filter((ele)=>ele!==elem)
console.log(answer)

const reverse_Str=(str,pair)=>{
    return str.split(pair).reverse().join(pair)
}
console.log(reverse_Str('ghvgvgh god'))

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let bc=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
let dv=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(bc)

let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let t_Answer=[...arrsd.slice(0,deleteAt),...arrsd.slice(deleteAt+1)]
console.log(t_Answer)

let arr6=["ban","Apple","orange"]
arr6.map((ele)=>console.log(ele.replace(/ban/g,"")))