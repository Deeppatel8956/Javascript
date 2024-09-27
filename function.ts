// 1 function call typescript
// 2 error and problem solving
// 3 ts configuration : nolimiit error

function sum (a:number,b:number):number {
    return a+b
}
console.log(sum(10,20))

function divid(p:string):string {
    return p
}
console.log(divid("god"))

function multiplay(s:number,c:number):number {
    return s*c
}
console.log(multiplay(10,20))

function modul(params:number):number {
    return params
}
console.log(modul(100))

function minal(c:number,b:number):number {
    return c-b
}
console.log(minal(10,20))

function ispalindrome(pail:string):boolean{
    let maypail=pail.split("").reverse().join("")
    return maypail==pail
}
console.log(ispalindrome("lool"))