const remocve_Duplicate=(arr)=>{
  return arr.filter((item,index)=>{
    return arr.indexOf(item)===index
  }).sort((a,b)=>a-b)
}
let c_Arr=[5,6,7,5,6,7,1,2,3]
console.log(remocve_Duplicate(c_Arr))

// 2nd method
const r_Duplicate=(arr)=>{
    let r_Arr=[...new Set(arr)]
    return r_Arr.sort((a,b)=>a-b)
}
console.log("This is a second method",r_Duplicate(c_Arr))