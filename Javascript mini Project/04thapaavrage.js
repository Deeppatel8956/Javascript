const average=(arr)=>{
    let total= arr.reduce((accum,curr)=>{
        return  accum+curr
    },0)
    return total/arr.length
}
console.log(average([10,20,30,40]))