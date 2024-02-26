function sum(a,b) {
    return a+b
}

console.log(sum(10,20))


arr=[10,200,30]
function higest(arr) {
    let b=Math.max.apply(null,arr)
    return b
}
console.log(higest(arr))

function pali(str) {
    return str===str.split("").reverse().join('')
}
console.log(pali("god"))

let str="god"
console.log(str.split("").reverse().join(''))

function Evennumber(no) {
    let no1=no.filter((num)=>num%2===0)
    return no1
}
console.log(Evennumber([1,2,3,4,5,6,7,8,9]))


function factorial(n) {
    if (n<0) {
        return "negative"
    }
    if (n===0||n===1) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}
console.log(factorial(4))


function isPrime(no) {
    if(no<=1) return false
    for (let index = 2; index < Math.sqrt(no); index++) {
    if(no%index===0) return false
        
    }
    return true
}
console.log(isPrime(10))

function sentance(str) {
    return  str[0].toUpperCase()+str.slice(1)
    
}
console.log(sentance("hello i am deep"))

function sortByKey(arr, key) { 

    return arr.sort((a, b) => a[key] - b[key]); 
  
  } 
  console.log(sortByKey([10,40,30,20]))

  let obj={

    name:"devine",
    no:20
  }
  function clone_Obj(obj) {
    // let v=Object.assign({},obj)
    // return v
    
    let c1=JSON.parse(JSON.stringify(obj))
    return c1
  }
  console.log(clone_Obj(obj))


  let arr23=[100,20,60,90]
  let arr24=[10,30,40,80,70]
  function sort_Arr(arr1,arr2) {
    let arr3=[...arr1,...arr2]
    let d=arr3.sort((a,b)=>a-b)
    return d
  }
  console.log(sort_Arr(arr23,arr24))

  function flattenArray(arr) {
    return arr.flat(Infinity)
  }
  console.log(flattenArray([10,20,[30,40]]))


  let a1="Army"
  let a2="Mray"
  function true_Palidrome(str1,str2) {
      var c=str1.toLowerCase()
      var c1=str2.toLowerCase()

      return c.split("").sort().join("")===c1.split("").sort().join("")
  }
  console.log(true_Palidrome(a1,a2))


  function reverseString(str) {
     var reverse="";
     for (let i=str.length-1;i>=0;i--) {
        reverse+=str[i]
     }
     return reverse
  }
  console.log(reverseString("world"))


  function findMinMax(arr) {
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    return [max ,min]
  }
  console.log(findMinMax([10,200,30,40]))



  function getUniqueElements(arr) {
    return Array.from(new Set(arr))
  }
  console.log(getUniqueElements([10,10,20,30,20,40,30]))


  function findSum(arr) {
    return arr.reduce((total,num)=>total+num,0)
  }
  console.log(findSum([10,20]))

  let f="board"
  console.log(f.split("").reverse().join(''))



  function removeDuplicates(arr) {
    return arr.filter((item,index)=>arr.indexOf(item)===index)
  }
  console.log(removeDuplicates([10,20,10,20,30,40,30,40,50,60,50]))


  




  