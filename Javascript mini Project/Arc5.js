let obj=[{name:"Alica",age:20},
{name:"Dark",age:40},
{name:"Rockey",age:44}]

function new_Obj(obj) {
    var item={}
    obj.forEach(element => {
       if (!item[element.age]) {
          item[element.age]=[element]
       } else{
        item[element.age].push(element)
       }
    });
    return item
}
console.log(new_Obj(obj))


// Find the missing number from unsorted array with O(n) complexity
function missing(a) {
    let l=a.length
    let sum=l
    for(let i=2;i<=(l+1);i++){
        sum=sum+i
        sum=sum-a[i-2]
    }
    return sum
}
console.log(missing([1,12,6,4,8,87,9,9,5,6,1]))


// Find the nth largest element in a sorted array
let arr=[1,23,56,8,9,4,62,1,56,20,2]
arr.sort((a,b)=>a-b)
let n=2
let sortedanwser=arr[arr.length-n]
console.log(sortedanwser)


//  Remove duplicates from an array and return unique values in O(n) complexity.
let arred=[1,2,3,4,5,6,4,2,3]
let answerfilter=arred.filter((index,item)=>arred.indexOf(index)===item)
console.log(answerfilter)

// Print all duplicate elements of an array
let duplicatvalue=arred.filter((index,item)=>arred.indexOf(index)!==item)
console.log(duplicatvalue)

// Collect books from array of objects and return collection of books as an array
let c1=obj.reduce((pre,cured)=>{
    return [...pre, ...cured.age]
},[])
console.log(c1)
