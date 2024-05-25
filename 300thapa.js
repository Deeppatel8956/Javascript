function rmeove(params) {
    return params.filter((index,item)=>params.indexOf(index)===item)
}
console.log(rmeove([1,2,3,1,2,3]))

function ispalindrome(params) {
    params=params.toLowerCase()
    let r=params.split("").reverse().join("")
    return params=r?true:false
}
console.log(ispalindrome('lool'))

function fibanaci(params) {
    if (params==0||params==1) {
        return params
    } else {
       return fibanaci(params-1)+fibanaci(params-2)
    }
}
console.log(fibanaci(5))

function checkstr(str,sub) {
    str=str.toLowerCase()
    sub=sub.toLowerCase()

    if (sub.length > str.length) {
        return false
    }

    for (let index = 0; index < sub.length; index++) {
        if (str[index]==sub[index]) {
            return true
        } else {
            return false
        }
        
    }
    return str
}
console.log(checkstr("hello","he"))

function findamx(pa) {
    return Math.max(...pa)
}
console.log(findamx([10,20,30,40,100,50]))


function Countchar(word,char) {
    word=word.toLowerCase()
    char=char.toLowerCase()

    var r=word.split("").reduce((acc,cur)=>{
        if (cur==char) {
            acc++
        }
        return acc
    },0)
    return r
}
console.log(Countchar("Mission","I"))

function arrequal(arr1,arr2) {
    var t= arr1.some((ele)=>arr2.includes(ele))
    return t
}
console.log(arrequal([1,2],[1,2]))

function sumdigites(params) {
    let sum=0
    while(params > 0){
        let ran=params%10
        sum+=ran
        params=Math.floor(params/10)
    }
    return sum
}
console.log(sumdigites(1234))

function powerof(params) {
    let op=false
    for (let index = 1; index <= params; index++) {
        if( 2**index==params){
            op=true
        }
        
    }
    return op
}
console.log(powerof(8))

function sumofaquare(params) {
    return params.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sumofaquare([1,2,3]))

function camplecase(params) {
    params=params.trim().split(" ")
    params=params.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    return params.join(" ")
}
console.log(camplecase("hello world"))

function upperLetter(params) {
    if (params.charCodeAt(0)>=65&&params.charCodeAt(0)<=95) {
        return true
    }
    return false
}
console.log(upperLetter('f'))

function findmiden(arr) {
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mid=Math.floor(len/2)
    if (len%2==0) {
        return arr[mid]+arr[mid+1]/2
    } else {
        return arr[mid]
    }

}
console.log(findmiden([5,3,9,1,7]))

function findmode(params) {
    var count={}
    var maxmium=0
    var mode
    for(let first of params) {
        count[first]=(count[first]||0)+1
        if (count[first] > maxmium) {
            maxmium=count[first]
            mode=first
        }
    }
    return mode
}
console.log(findmode([1,2,2,3,1,4,2]))


function count(params) {
    let r={}
    for(let first of params) {
        if (r[first]) {
             r[first]++
        } else {
             r[first]=1
        }
    }
    return r
}
console.log(count([1,2,3,1,2,3,4]))

function repatedstr(params,num) {
    if (num==0||num==1) {
        return params
    } else {
        return params+repatedstr(params,num-1)
    }
}
console.log(repatedstr("abc",2))

function truncatestr(str,n) {
    return n < 0?str:str.slice(0,n).concat('...')
}
console.log(truncatestr("h jabghbhbj b mnchjbhbdghb",1))

function numberReapatedstr(a,b,arr=[]) {
    if (a<=b) {
        arr.push(a)
        return numberReapatedstr(a+1,b,arr)
    }
    return arr
}
console.log(numberReapatedstr(-8,2))

function nstr(a,b) {
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(nstr(-2,2))

function randomColor() {
    return`#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(randomColor())

function findLongword(params) {
    if (params.trim().length==0) {
        return false
    }
    params=params.split(" ")
    params=params.sort((a,b)=>a.length-b.length)
    return params.at(-1)
}
console.log(findLongword("hello javascript"))

function Allcapital(params) {
    if (params.length < 0) {
        return false
    }

    params=params.split(" ")
    params=params.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return params.join(" ")
}
console.log(Allcapital("my name is god"))

function anagaram(p,p1) {
    p=p.toLowerCase()
    p1=p1.toLowerCase()

    return p.split("").sort().join("")==p1.split("").sort().join("")
}
console.log(anagaram("Army","Mary"))

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
console.log(factorial(3))

function vowelcount(params) {
    let vowels=["a","e","i","o","u"]
    let total=params.split("").reduce((acc,cur)=>{
        return vowels.includes(cur)?acc+1:acc
    },0)
    return total
}
console.log(vowelcount("hello"))