const removeValue=(arr)=>{
    return arr.filter((index,item)=>arr.indexOf(index)===item)
}
console.log(removeValue([1,2,3,1,2,3]))

const vowel=(vowed)=>{
    let vp=["a","e","i","o","u"]
    return vowed.split("").reduce((acc,cur)=>{
        return vp.includes(cur)?acc+1:acc
    },0)
}
console.log(vowel("hello"))

const powerOf=(va)=>{
    let op=false
    for(let i=1;i<=va;i++){
        if (2**i==va) {
            op=true
        }
    }
    return op
}
console.log(powerOf(8))

const findmiden=(num)=>{
    num=num.sort((a,b)=>a-b)
    let len=num.length
    let mid=Math.floor(len/2)
    if (len%2==0) {
        return num[mid]+num[mid+1]/2
    } else {
        return num[mid]
    }
}
console.log(findmiden([1,2,3,4,5]))

const findmode=(num)=>{
    let count={}
    let mixmum=0
    let mode
    for(let first of num) {
        count[first]=(count[first]||0)+1
        if (count[first]>mixmum) {
            mixmum=count[first]
            mode=first
        }
    }
    return mode
}
console.log(findmode([1,2,3]))

const findlength=(arr)=>{
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
console.log(findlength([1,2,3,1,3,2,3,4,6,6,0]))

const anagaram=(s,s2)=>{
    s=s.toLowerCase()
    s2=s2.toLowerCase()
    return s.split("").sort().reverse()===s2.split("").sort().reverse()
}
console.log(anagaram("Army","Mary"))


const ispalindrome=(str)=>{
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str===r?true:false
}

const fibanaci=(num)=>{
    if (num==0||num==1) {
        return num
    } else {
     return fibanaci(num-1)+fibanaci(num-2)       
    }
}
console.log(fibanaci(5))

const Some_vale=(a,c)=>{
    let v=a.some((el)=>c.includes(el))
    return v
}
console.log(Some_vale([1,2,3],[1,2,3]))

const sum_Squer=(arr)=>{
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sum_Squer([1,2,3]))

const Value_atob=(a,b,arr=[])=>{
    if (a<=b) {
        arr.push(a)
        return Value_atob(a+1,b,arr)
    } 
    return arr
}
console.log(Value_atob(-2,2))

const Second_Atob=(a,b)=>{
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(a)
    }
    return arr
}
console.log(Second_Atob(-1,1))

const addAandb=(str,num)=>{
    if (num==0||num==1) {
        return str
    } else {
     return str+addAandb(str,num-1)        
    }
}
console.log(addAandb("abc",2))

const randomColor=()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(randomColor())

const truncatest=(str,n)=>{
    return n < 0?str:str.slice(0,n).concat('...')
}
console.log(truncatest("A-test njbyub",2))

const camplecase=(str)=>{
    if(str.charCodeAt(0)>=65&&str.charCodeAt(0)<=95){
        return true
    }
    return false
}
console.log(camplecase("d"))

const sumof=(num)=>{
    let sum=0
    while (num > 0) {
        let random=num%10
        sum+=random
        num=Math.floor(num/10)
    }
    return sum
}
console.log(sumof(1234))

const sentecUpper=(str)=>{
    str=str.trim().split(" ")
    let t=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    return t.join(" ")
}
console.log(sentecUpper("hello god"))

const Coutchar=(word,char)=>{
    word=word.toLowerCase()
    char=char.toLowerCase()
    let ty=word.split("").reduce((acc,cur)=>{
        if (cur===char) {
            acc++
        } 
        return acc
    },0)
    return  ty
}
console.log(Coutchar("hello","l"))

const findamx=(arr)=>{
    // return arr.reduce((pre,cur)=>{
    //     return pre > cur ?pre:cur
    // },0)
    return Math.max(...arr)
}
console.log(findamx([1,200,3,34,6,3,8]))

const checkstr=(str,sub)=>{
    str=str.toLowerCase()
    sub=sub.toLowerCase()
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

const londword=(str)=>{
    if (str.trim().length==0) {
        return false
    }
    str=str.split(" ")
    str=str.sort((a,b)=>a.length-b.length)
    return str.at(-1)
}
console.log(londword("hello Css3myhome"))

const Allcapital=(str)=>{
    if (str.length<0) {
        return false
    }
    str=str.split(" ")
    str=str.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return str.join(" ")
}
console.log(Allcapital("my god is thunder"))

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
console.log(factorial(5))

const factorial2=(num)=>{
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial2(5))

const new_Duplicdate=(arr)=>{
    return arr.filter((index,item)=>arr.indexOf(index)!==item)
}
console.log(new_Duplicdate([1,3,5,8,9,7,5,2,3,4]))

const new_isPalindrome=(str)=>{
    let len=str.length
    for(let i=0;i<len/2;i++){
        if (str[i]!==str[len-i-1]) {
            return "not palindrome"
        } else {
            return 'palindrome'
        }
    }
}
console.log(new_isPalindrome('lool'))


let c=4
let str=''
for(let i=0;i<c;i++){
    for(let j=0;j<i;j++){
        str+='*'
    }
    str+='\n'
}
console.log(str)

const newSum=(arr,target)=>{
    let pair=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target) {
                pair.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return pair
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(newSum(arr,target))

const days=["monday","tuesday","friday","sunday"]
for(let day of days) {
    day=day.charAt(0).toUpperCase()+day.slice(1).toLowerCase()
    console.log(day)
}
const revers_Sentence=(str,pair)=>{
    return str.split(pair).reverse().join(pair)
}
console.log(revers_Sentence("hello god",""))

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let total=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
// secondmethod
let me=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(total)
console.log("me",me)

let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let final=[...arrd.slice(0,deleteAt),...arrd.slice(deleteAt+1)]
console.log(final)

let arr5=[1,2,3,4,5,6,7,8,6,97,1,3]
let elem=2
let r=arr5.filter((el)=>el!==elem)
console.log("r",r)

let arr6=["ban","Apple","orange"]
arr6.map((el)=>{
    console.log(el.replace(/ban/g,''))
})

let obj=[{name:"Alica",age:20},
{name:"Dark",age:40},
{name:"Rockey",age:44}]

function new_Obj(obj) {
    var item={}
    obj.forEach(element => {
       if (!item[element.age]) {
          item[element.age]=[element]
       } else{
        item[element.age].push(element)
       }
    });
    return item
}
console.log(new_Obj(obj))
