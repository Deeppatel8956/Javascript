function isstr(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(isstr("welcome to chanel"))

function Maximum(arr) {
    return Math.max(...arr)
}
console.log(Maximum([10,20,300]))

let arred=[1,2,3,2,3,4,5]
let new_Arred=arred.filter((index,item)=>arred.indexOf(index)===item)
console.log(new_Arred)
let new_Arred2=arred.filter((index,item)=>arred.indexOf(index)!==item)
console.log(new_Arred2)

let arr=[10,20,3,4,5,6,7]
let replace=40
let ele=2
let answer=[...arr.slice(0,replace),ele,...arr.slice(replace)]
console.log(answer)

function Minmum(arr) {
    return Math.min(...arr)
}
console.log(Minmum([10,20,300]))