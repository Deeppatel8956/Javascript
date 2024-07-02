const findmiden3=(arr)=>{
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mode=Math.floor(len/2)

    if (len%2==0) {
        return arr[mode]+arr[mode+1]/2
    } else {
        return arr[mode]
    }
}

const findmode3=(arr)=>{
    let cout={}
    let maixmum=0
    let mode
    for(let first of arr) {
        cout[first]=(cout[first]||0)+1
        if (cout[first]> maixmum) {
            maixmum=cout[first]
            mode=first
        }
    }
    return mode
}

const findlength3=(arr)=>{
    let r={}
    for(let first of arr) {
        if (r[first]) {
            r[first]++
        } else {
            r[first]=1
        }
    }
    return r
}

const truncate_Str3=(str,n)=>{
    return n < 0 ?str:str.slice(0,n).concat('...')
}

const capital_Uppercase3=(str,sub)=>{
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

const findword=(word,char)=>{
    word=word.toLowerCase()
    char=char.toLowerCase()
    let c=word.split(" ").reduce((acc,cur)=>{
        if (cur==char) {
            acc++
        }
        return acc
    },0)
    return c
}

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

const sumof_Squre3=(num)=>{
    let su=0
    while (num > 0) {
        let random=num%10
        sum+=random
        num=Math.floor(num/10)
    }
    return sum
}

const ispalindrome3=(str)=>{
    str=str.toLowerCase()
    let r=str.split("").reverse().join("")
    return str==r?true:false
}

const anagaram3=(s1,s2)=>{
    s=s1.toLowerCase()
    d=s2.toLowerCase()
    return s.split("").sort().join("")===d.split("").sort().join("")
}

const sum3=(num)=>{
  return num.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}

const fibanaci3=(num)=>{
    if (num==0||num==1) {
        return num
    } else {
      return fibanaci3(num-1)+fibanaci3(num-2)        
    }
}

const factorial5=(num)=>{
    if (num < 0) {
        return false
    }
    if (num==0||num==1) {
        return num
    } else {
     return num*factorial5(num-1)        
    }
}

const factorial6=(num)=>{
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}

const powerOf3=(num)=>{
    let op=false
    for(let i=1;i<=num;i++){
        if (2**i==num) {
            op=true
        }
    }
    return op
}

const longword3=(str)=>{
    if (str.trim().length < 0) {
        return false
    }
    str=str.split(" ")
    str=str.sort((a,b)=>b.length-a.length)
    return str.at(-1)
}

const Value_atob6=(a,b)=>{
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}

const Value_atob7=(a,b,arr=[])=>{
    if (a <=b) {
        arr.push(a)
        return Value_atob7(a+1,b,arr)
    }
    return  arr
}

const maixmum_Find=(arr)=>{
    return Math.max(...arr)
}

const capital_Uppercase4=(str)=>{
    if (str.charCodeAt(0)>=65&&str.charCodeAt(0)<=95) {
        return true
    }
    return false
}

const some_Array=(s1,s2)=>{
    let d=s1.some((ele)=>s2.includes(ele))
    return d
}

let arr3=[1,2,3]
let eled=2
let ret=arr3.filter((ele)=>ele!==eled)

let c2=4
let st=''
for(let i=0;i<c2;i++){
    for(let j=0;j<i;j++){
        st+='*'
    }
    st+='\n'
}

const vowe3=(vow)=>{
    let vos=["a","e","i","o","u"]
    return vow.reduce((acc,cur)=>{
        return vos.includes(cur)?acc+1:acc
    },0)
}

const Target_Sum3=(arr,target)=>{
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

let arrd2=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace2=1
let ele2=45
let rt=[...arrd2.slice(0,replace2),ele2,...arrd2.slice(replace2+1)]
let tr2=[...arrd2.slice(0,replace2),ele2,...arrd2.slice(replace2)]
console.log(rt)

let arrsd2=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt2=1
let r_Delete=[...arrsd2.slice(0,deleteAt2),...arrsd2(deleteAt2+1)]