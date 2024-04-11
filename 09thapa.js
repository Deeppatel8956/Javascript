const sum_Mul=(arr)=>{
  return arr.reduce((accum,cur)=>(accum=accum+(cur*cur)))
}
console.log(sum_Mul([1,2,3]))

const sum_Mul2=(arr)=>{
    let sum=0
    for(let first of arr) {
        sum=sum+first*first
    }
    return  sum
}
console.log(sum_Mul2([1,2,3]))


const sum_Mul3=(arr)=>{
    let sum=0
    return arr.map((ele)=>{
      return sum=sum+ele*ele
    })
}
console.log(sum_Mul3([1,2,3]))

const sum_Mul4=(arr)=>{
    let sum=0
  return arr.forEach(element => {
     return sum=sum+element*element
  });
}
console.log(sum_Mul4([1,2,3]))