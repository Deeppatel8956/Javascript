let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11
function newistotal(arr,target) {
    var paris=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0+i;j<arr.length;j++){
            if (arr[i]+arr[j]===target) {
                paris.push(`(${arr[i]},${arr[j]})`)
            }
        }
    }
    return paris
}
console.log(newistotal(arr,target))



// 2nd way
// function newistotal(arr,target) {
//     var paris=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if (arr[i]+arr[j]===target) {
//                 paris.push(`(${arr[i]},${arr[j]})`)
//             }
//         }
//     }
//     return paris
// }
// console.log(newistotal(arr,target))




