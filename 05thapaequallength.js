let Array_equal=(arr1,arr2)=>{
    if (arr1.length !== arr2.length) {
        return false
    }
    arr1.every((cur,index)=>
    cur==arr2[index])
}
let arr1=[1,2,3]
let arr2=[1,2,4]
console.log(Array_equal(arr1,arr2))

const sumof_Digits=(num)=>{
  let arr=Array.from(String(num),Number)
  console.log(arr)
  return arr.reduce((accum,cur)=>accum+=cur,0)
}
console.log(sumof_Digits(1234))