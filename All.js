let arr=[1,2,3,1,2,3]
let returned=arr.filter((index,item)=>arr.indexOf(index)!==item)
console.log(returned)
let duplicate=arr.filter((index,item)=>arr.indexOf(index)===item)
console.log(duplicate)

let a1="Mary"
let a2="Army"
function newstr(s1,s2) {
    var d1=s1.toLowerCase()
    var d2=s2.toLowerCase()
    return d1.split("").sort().join("")===d2.split("").sort().join("")
}
console.log(newstr(a1,a2))

function ispalindrome(str) {
    let j=str.split("").reverse().join("")
    if (j===str) {
        return true
    } else {
        return false
    }
}
console.log(ispalindrome("lool"))

function newsum(arr,target) {
    var pair=[]
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target) {
                pair.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return pair
}
let arred=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(newsum(arred,target))

let arr2=["monday","tuesday","friday"]
for(let day of arr2) {
    day=day.charAt(0).toUpperCase()+day.substring(1)
    console.log(day)
}

function reversestr(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(reversestr("welcome to arc",""))

let arred3=[100,200,30,45,5]
function ismaximumarray(arr) {
    return arr.reduce((prev,cur)=>{
        return prev > cur ? prev : cur
    })   
}
console.log(ismaximumarray(arred3))

let student=[1,0,23,4,0,6,7,8,50]
let replaceAt=1
let ele=15
// let replacepostion=[...student.slice(0,replaceAt),ele,...student.slice(replaceAt+1)]
// console.log(replacepostion)
let doesnotreplaceanyword=[...student.slice(0,replaceAt),ele,...student.slice(replaceAt)]
console.log(doesnotreplaceanyword)

let arr3=[1,2,3,4]
let return4=[45,...arr3]
console.log(return4)

let arr5=[1,2,3,4,5,6,78,0]
let answer=arr5.sort((a,b)=>a-b)
console.log(answer)

let copy=[1,0,2,3,4,0,2,3]
let copyed=new Set(copy)
console.log(copyed)

function factorial(n) {
    if (n < 0) {
        return "infinite value"
    }
    if (n===0||n===1) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}
console.log(factorial(3))

let newarr=[200,100,40,50,80]
let findaverage=newarr.reduce((a,b)=>a+b)
console.log(findaverage/newarr.length)


let arr6=["ban","Apple","orange"]
arr6.map((ele)=>{
    console.log( ele.replace(/ban/g,"banana"))
})

let obj={
    name:"dark",
    code:"12332"
}
let modifyobj={
    ...obj,
    zipcode:"382561"
}
console.log(modifyobj)

let word="A word is a basic element of language that carries meaning, can be used on its own, and is uninterruptible. Despite the fact that language speakers often have an intuitive grasp of what a word is, there is no consensus among linguists on its definition and numerous attempts to find specific criteria of the concept remain controversial. Different standards have been proposed, depending on the theoretical background and descriptive context; these do not converge on a single definition. Some specific definitions of the term  are employed to convey its different meanings at different levels of description, for example based on phonological, grammatical or orthographic basis. Others suggest that the concept is simply a convention used in everyday situations"

function wordcount(str) {
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
console.log(wordcount(word))

var x1=['100-110','50-55','0-10']
var x2=51
var newanswer=x1.indexOf(x2)
console.log(newanswer)