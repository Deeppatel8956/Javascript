const slice_Str=(count , num)=>{
    let arr=[]
    for(let i=count;i<=num;i++){
        arr.push(i)
    }
    return arr
}
console.log(slice_Str(0,5))

const slice_Str1=(count,num)=>{
    let a=[]
    while (count <= num) {
        a.push(count)
        a++
    }
    return a
}
console.log(slice_Str1(-2,5))