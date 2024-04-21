const avearge=(num)=>{
 var sam= num.reduce((accum,cur)=>accum+cur,0)
  return sam/num.length
}
console.log(avearge([1,2,3,4,5]))

const avarage2=(arr)=>{
  let sum=0
  return arr.forEach(element => {
    sum+=element
  });

  
}
console.log(avarage2([1,2,3,4,5]))