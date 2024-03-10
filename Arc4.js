let student=[1,0,23,4,0,6,7,8,50]
let replaceAt=1
let ele=15
let answer=[...student.slice(0,replaceAt),ele,...student.slice(replaceAt+1)]
console.log(answer)

// 2nd 
let studented=[1,0,23,4,0,6,7,8,100]
let replaceAtes=1
let eled=15
let answerd=[...student.slice(0,replaceAt),ele,...student.slice(replaceAt)]
console.log(answerd)

// delete
let given=[1,40,23,4,0,6,7,800,100]
const deleteAt=1
let known=[...given.slice(0,deleteAt),...given.slice(deleteAt+1)]
console.log(known)


// clone object
let obj={
    name:"god",
    id:1
}
console.log(Object.assign({},obj))
// 2nd method
console.log(JSON.parse(JSON.stringify(obj)))

// add beging
const a1=[10,2,3,45,68]
let element=45
let new_Arr=[element,...a1]
console.log(new_Arr)
// 2nd method
let Row=a1.unshift(20)

// replace
let arr=["ban","Apple","orange"]
arr.map((ele)=>{
    // ban value to repalce
    console.log(ele.replace(/ban/g,""))
})
