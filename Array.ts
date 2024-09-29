let nums:number[]=[10,20]
function avarage(n:number[]):number {
    let c=n.reduce((acc,cur)=>{
        return acc+cur
    },0)
    return c/n.length
}
console.log(avarage(nums))

// array method
let Names:string[]=["vinod","thapa"]
let bname=Names.push("god")
console.log(bname)

// pop
let r=Names.pop()
console.log(r)

// shift
let v=Names.shift()
console.log(v)

// unshift
let un=Names.unshift("demon")
console.log(un)

// map
let numbers:number[]=[1,2,3,4,5,6]
let doublevalue:number[]=numbers.map((curva:number)=>curva*2)
console.log(doublevalue)
// let numbertostring:string[]=numbers.map((cur:number)=>cur.tostring())

let doublevalue_filter:number[]=numbers.filter((curva:number)=>curva % 2==0)
console.log(doublevalue_filter)
