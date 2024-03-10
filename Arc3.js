let Ids=[3,2,5,1,2,1,1,4]
let answer=Ids.filter((index,item)=>Ids.indexOf(index)==item).sort((a,b)=>{
    return a-b
})
console.log(answer)

// maximum
let v=[100,2,4,5,200]
function maximum(arr) {
    return arr.reduce(function(prev,cur){
        return prev>cur?prev:cur
    })
}
console.log(maximum(v))
// avarage
let c1=v.reduce((a,b)=>a+b,0)
let len=v.length
console.log(c1/len)

// first character upperacase
const days=["monday","tuesday","friday","sunday"]
for (let day of days) {
    let dayed=day.charAt(0).toUpperCase()+day.substring(1)
    console.log(dayed)
}

// include array
const pass_Id=[1,2,3,4,5,6]
const stu_Id=[1,2,3]

const new_Answer=pass_Id.some((ele)=>stu_Id.includes(ele))
console.log(new_Answer)


// Object
const input={
    "student":[{
         name:"Arc",
         id:1
    },{
        name:"Dark",
        id:2
    }]
}
let new_Map=input.student.map((ele)=>{
    return ele.id
})
console.log(new_Map)

let new_opFilter=input.student.filter((item)=>{
    return item.id>0?item:"";
})
console.log(new_opFilter)


// sentence reverse
const str="welcome to ARC"

function new_Reverse(str,paris) {
    return str.split(paris).reverse().join(paris)
}
console.log(new_Reverse(str,""))

// function new_Reversed(str) {
//     return str.split(" ").reverse().join("")
// }
// console.log(new_Reversed(str))

// reveres without changeing the new array
let arres=["a","b","c","d","e"]
const new_Arres=arres.slice().reverse()
console.log(new_Arres)

