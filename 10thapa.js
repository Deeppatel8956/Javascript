const min_Value=(arr)=>{
    return arr.reduce((accum,cur)=>{
        return accum < cur ?accum:cur
    })
}
console.log(min_Value([10,20,8,30,50]))

// 2nd method
const min_Value2=(arr)=>{
    return arr.sort((a,b)=>{
        if (b > a) {
            return -1
        }
    })
}
console.log(min_Value2([10,20,8,30,50]))

// 3rd method
const min_Value3=(arr)=>{
    return Math.min(...arr)
}
console.log(min_Value3([10,20,8,30,50]))

// 4th method
const min_Value4=(arr)=>{
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    return [max,min]
}
console.log(min_Value4([10,20,8,30,50]))

// 5th method
function findMin(array) {
    return array.length ? Math.min(...array) : "empty array";
}
console.log("death",findMin([10,20,8,30,50]))


