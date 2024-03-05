function new_Arraysum(arr,target) {
    let paris=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]===target) {
                paris.push((`(${arr[i]},${arr[j]})`)) 
            }
        }
    }
    return paris
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11


let new_Result=new_Arraysum(arr,target)
console.log(new_Result)