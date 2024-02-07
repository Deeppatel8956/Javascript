let str="hello i am deep"
function reverse_Sent(str) {
   let result= str.split("").reverse().join("")
   return result
}
console.log(reverse_Sent(str))

function Array_is(chck) {
    return Array.isArray(chck)

}
console.log(Array_is({}))

let arr_Empty=[10,20,3,0,100]
arr_Empty.length=0
console.log(arr_Empty)

function is_integer(num) {
    if (num%1==0) {
        return "injteger"
    } else {
        return "empty"
    }
}
console.log(is_integer(13))

function duplicate_Arr(arr) {
    return arr.concat(arr)
}
let a1=[1,2,3]
console.log(duplicate_Arr(a1))

function reverse_Num(num) {
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reverse_Num(12))

function paliandrome(char) {
    let reverse=char.split("").reverse().join("")
    if (reverse===char) {
        return "true"
    } else {
        return "false"
    }
}
console.log(paliandrome("poop"))
console.log(paliandrome("loop"))



function first_Capital(char) {
    let result=char.charAt(0).toUpperCase()+str.substring(1)
    return result

   // way2
//   let show=  char.split(" ").map((ele)=>{
//        return ele.charAt(0).toUpperCase()+ele.substring(1)
//     })
//     return show.join(" ")
}
console.log(first_Capital("hello my youtube channel"))


function char_Count(char) {
    var reverse={}
    char.split("").forEach(element => {
        if (reverse.hasOwnProperty(element)===false) {
            reverse[element]=1;
        } else {
            reverse[element]++;
        }  
    });
    return reverse
}
console.log(char_Count("harsh"))

let arr=[10,20,30]
var sum=0
arr.forEach((ele)=>{
  sum=sum+ele
})
console.log(sum)


let arr_Stirng=["hgc",130,"darl",10]
var sum_Num=0
arr_Stirng.forEach((ele)=>{
    if (typeof ele==='number') {
        sum_Num+=ele
    }
})
console.log(sum_Num)

let arr_Detail=[
    {name:"god",gender:"male"},
    {name:"dog",gender:"fmale"},
    {name:"dark",gender:"fmale"}
]

// for(let j=0;j<=arr_Detail.length;j++){
//     if (arr_Detail[j].gender!=='male') {
//         arr_Detail.splice(j,1)
//     }
// }
// console.log(arr_Detail6)

let arr_Dup=[10,20]
function duplicate(params) {
    return [...params]
}
console.log(duplicate(arr_Dup))

function name(params) {
    return typeof params
}
console.log(name([]))


// print first
function Print(arr,n = 1 ) {
    if (n<=arr.length) {
        for(let i=0;i<n;i++){
            console.log(arr[i])
        }

        // last
        // for(let i=0;i<n;i++){
        //     console.log(arr[arr.length-1-i])
        // }
    } else {
        console.log("itne to number anhi hai")
    }
}
console.log(Print([1,2,3,4,5],2))


// frequent
// function freq(arr) {
//     var fred={}
//     arr.forEach((ele)=>{
//         if(fred.hasOwnProperty(ele)) fred[ele]++
//         else fred[ele]=1
//     })
//     var ans=Object.keys(freq).reduce((acc,num)=>{
//         return freq[acc]>freq[num]?num:acc
//     })
//     console.log(ans)
// }
// console.log(freq([100,200,10,20,30,40,50]))


// shuful
// function shful(arr) {
//     var totalshuful=arr.length
//     while (totalshuful>0) {
//         totalshuful--;
//         var indexshuful=Math.floor(Math.random*totalshuful)
//         var temp=arr[totalshuful]
//         arr[totalshuful]=arr[indexshuful]
//         arr[indexshuful]=temp
//     }
//     return arr
// }

function shful_num(arr) {
    var totalshuful=arr.length
    while (totalshuful>0) {
        totalshuful--;
        var indexful=Math.floor(Math.random*totalshuful)
        var temp=arr[indexful]
        arr[totalshuful]=arr[indexful]
        arr[indexful]=temp
    }
    return arr
}
console.log(shful_num([1,2,3,4]))




