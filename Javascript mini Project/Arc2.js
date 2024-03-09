let c=4
let str=""

for(let i=1;i<c;i++){
    for(let j=0;j<i;j++){
        str+="*"
    }
    str+="\n"
}
console.log(str)

function new_Sum(arr,target) {
    var paris=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
             if (arr[i]+arr[j]===target) {
                paris.push(`(${arr[i]},${arr[j]})`)
             }
        }
    }
    return paris
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(new_Sum(arr,target))



let obj=[{id:1,status:"good"},
{id:2,status:"good"},
{id:3,status:"good"},
{id:4,status:"good"},]

obj.map((ele)=>{
    if (ele.id%2===0&&ele.status==="good") {
        console.log(ele.id,"and",ele.status="bad")
    }
})