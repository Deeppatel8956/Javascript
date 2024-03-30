let arr=[1,2,3,1,2,3,4,5]
let answer=arr.filter((index,item)=>arr.indexOf(index)!==item)
console.log(answer)
let newanswer2=arr.filter((index,item)=>arr.indexOf(index)===item)
console.log(newanswer2)

let arr2=[1,2,3,4,5,6]
let del=2
let deleteanswer=arr2.filter((ele)=>ele!==del)
console.log(deleteanswer)

// anagram
let a1="Mary"
let a2="Army"
function is_Anagram(s1,s2) {
    let v1=s1.toLowerCase()
    let v2=s2.toLowerCase()

    return v1.split("").sort().join("")===v2.split("").sort().join("")
}
console.log(is_Anagram(a1,a2))

// palindrome
function ispalindrome(str) {
    str=str.toLowerCase()
    return str===str.split("").reverse().join("")
}
console.log(ispalindrome("lool"))

let arr3=[1,2,3,4,5,6,7]
let replaceAt=2
let ele=15
let reanwer=[...arr3.slice(0,replaceAt),ele,...arr3.slice(replaceAt+1)]
console.log(reanwer)
let reanwer_withoutchangearray=[...arr3.slice(0,replaceAt),ele,...arr3.slice(replaceAt)]
console.log(reanwer_withoutchangearray)

let arr4=[1,2,3,4,5,6,7]
let delet=2
let de_Answer=[...arr4.slice(0,delet),...arr4.slice(delet+1)]
console.log(de_Answer)

function factorial(n) {
    if (n<0) {
        return "Infinaite value"
    }

    if (n==0||n==1) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}
console.log(factorial(4))

function sum_Pair(arr,target) {
    let pair=[]
    for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
              if (arr[i]+arr[j]==target) {
                pair.push(`(${arr[i]},${arr[j]})`)
              }
            }
        }
        return pair
}
let arr5=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(sum_Pair(arr5,target))

let sentence="welcome to my channel"
function re_sentenec(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(re_sentenec(sentence,""))


let arred3=[100,200,30,45,5]
function ismaximumarray(arr) {
    return arr.reduce((prev,cur)=>{
        return prev > cur ? prev : cur
    })   
}
console.log(ismaximumarray(arred3))


let arred4=[100,200,30,45,5]
function ismaximumarray(arr) {
    return arr.reduce((prev,cur)=>{
        return prev < cur ? prev : cur
    })   
}
console.log(ismaximumarray(arred4))

let arr6=[100,200,30,45,5,300]
let max=Math.max(...arr6)
console.log(max)

let min=Math.min(...arr6)
console.log(min)

let arr7=["monday","tuesday","friday"]
for(let day of arr7) {
    day=day.charAt(0).toUpperCase()+day.substring(1)
    console.log(day)
}

let a45=[1,2,3,4,5]
a45=[]
a45.length=0

let arr8=[1,2,3]
console.log(arr8.push(0))
// console.log(0,...arr8)

let arr9=[100,200,300]
let avarge=arr9.reduce((a,b)=>a+b,0)
console.log(avarge/arr9.length)

let arr10=["ban","Apple","orange"]
arr10.map((ele)=>{
    console.log( ele.replace(/ban/g,"banana"))
})

let completsentence=arr10.join(" ")
console.log(completsentence)

let word="A word is a basic element of language that carries meaning, can be used on its own, and is uninterruptible. Despite the fact that language speakers often have an intuitive grasp of what a word is, there is no consensus among linguists on its definition and numerous attempts to find specific criteria of the concept remain controversial. Different standards have been proposed, depending on the theoretical background and descriptive context; these do not converge on a single definition. Some specific definitions of the term  are employed to convey its different meanings at different levels of description, for example based on phonological, grammatical or orthographic basis. Others suggest that the concept is simply a convention used in everyday situations"
function count_Word(str) {
    let pair={}
    for(let first of str) {
        if (pair[first]) {
            pair[first]++
        } else {
            pair[first]=1
        }
    }
    return pair
}
// console.log(count_Word(word))

// find index
var x1=['100-110','50-55','0-10']
var x2=51
var dindex=x1.indexOf(x2)
console.log(dindex)

let obj={
    name:"dark",
    code:"12332"
}
let man=Object.assign({},obj)
console.log("first copy" , man)
let man2=JSON.parse(JSON.stringify(obj))
console.log("second copy" , man2)

let modify={
    ...obj,
    code:"1223"
}
console.log("modify" , modify)

let str="hello"
console.log(Array.isArray(str))

let pl="lool"
function ispal(params) {
    return params===params.split('').reverse().join('')
}
console.log(ispal(pl))

function angaam(pa,pa2) {
    let s1=pa.toLowerCase()
    let s2=pa2.toLowerCase()
    return s1.split('').sort().join('')===s2.split('').sort().join('')
}
console.log(angaam("Mary",'Army'))

const rarr=[1,2,3,4,5,6]
let elee=10
let replace2=2
// let answerrepalce=[...rarr.slice(0,replace2),elee,...rarr.slice(replace2+1)]
let without_answerrepalce=[...rarr.slice(0,replace2),elee,...rarr.slice(replace2)]
console.log(without_answerrepalce)
let show_word="A word is a basic element of language that carries meaning, can be used on its own, and is uninterruptible. Despite the fact that language speakers often have an intuitive grasp of what a word is, there is no consensus among linguists on its definition and numerous attempts to find specific criteria of the concept remain controversial. Different standards have been proposed, depending on the theoretical background and descriptive context; these do not converge on a single definition. Some specific definitions of the term  are employed to convey its different meanings at different levels of description, for example based on phonological, grammatical or orthographic basis. Others suggest that the concept is simply a convention used in everyday situations"
function isstr(params) {
    var pair={}
    for(let first of params) {
        if (pair[first]) {
            pair[first]++
        } else {
            pair[first]=1
        }
    }
    return pair
}
console.log(isstr(show_word))


let arr25=[1,2,3,4,5,6]
let delt=2
let vanswer=arr25.filter((ele)=>ele!=delt)
console.log(vanswer)
let arr50=[1,2,3,1,2,3,4,5]
let e2=arr50.filter((inex,item)=>arr50.indexOf(inex)!==item)
console.log(e2)
let e3=arr50.filter((ele,item)=>arr50.indexOf(ele)===item)
console.log(e3)
function sentence_Reverse(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(sentence_Reverse("welcome to my channel",""))
var y1=['100-110','50-55','0-10']
var y2=51
console.log(y1.indexOf(y2))

let obj12={
    name:"dark",
    code:"12332"
}
let new_Obj=Object.assign({},obj12)
console.log(new_Obj)
let json_Obj=JSON.parse(JSON.stringify(obj12))
console.log(json_Obj)

let modify_Obj={
        name:"dark",
        code:"12332"
}
function name_Obj(str) {
    var pair={}
    for(let first of str) {
    if (pair[first]) {
        pair[first]++
    } else {
        pair[first]=1
    }
}
    return pair
}
console.log("hello",name_Obj(modify_Obj) )
let omodify={
    ...modify_Obj,
    zipcode:"101010"
}
// console.log(omodify)
let arr78=["monday","tuesday","friday"]
for(let day of arr78) {
    day=day.charAt(0).toUpperCase()+day.substring(1)
    console.log(day)
}
console.log(arr78.join(" "))
let arr40=[1,2,3,1000,400,50000]
let max_anwser=Math.max(...arr40)
console.log(max_anwser)
let avarege=arr40.reduce((a,b)=>a+b)
console.log(avarege/arr40.length)
function name_reduce(par) {
    return par.reduce((pre,cur)=>{
        // return pre>cur?pre:cur
        return pre<cur?pre:cur

    })
}
console.log(name_reduce(arr40))
let arr70=[1,2,3,4,5,6,7]
let dleted=2
let new_delte=[...arr70.slice(0,dleted),...arr70.slice(dleted+1)]
console.log(new_delte)

let modify_Objed = {
    name: "dark",
    code: "12332"
}

function name_Obj(obj) {
    var pair = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (pair[obj[key]]) {
                pair[obj[key]]++;
            } else {
                pair[obj[key]] = 1;
            }
        }
    }
    return pair;
}

console.log("hello", name_Obj(modify_Objed));
