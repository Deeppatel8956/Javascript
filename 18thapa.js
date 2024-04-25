const find_Length=(arr)=>{
let pair={}
let maixmmum=0
let mode
for(let first of arr) {
    // console.log(pair[first])
    pair[first]=(pair[first]||0)+1
    if (pair[first] > maixmmum) {
        maixmmum=pair[first]
        mode=first
    }
}
return mode
}
console.log(find_Length([1,1,2,2,3,4,2]))

// 2nd method
const find=(arr)=>{
let pair={}
for(let first of arr) {
    pair[first]=(pair[first]||0)+1
}
let r_Arr=Object.keys(pair).reduce((accum,cur)=>{
    return accum > cur? accum :cur
})
return r_Arr
}
console.log(find([1,1,2,2,3,4,2]))