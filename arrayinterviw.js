arr=[10,20,30];
// let c1=arr.forEach(element => {
//    return element*element
// });
// console.log(c1)

if (arr.indexOf(2)!==-1) {
    console.log("true")
} else {
    console.log("false")
}

arr.splice(0,1,100,210);
console.log(arr)

// 1. Write a function that returns the sum of all numbers in an array.
function array(arr1) {
    return arr1.reduce((total,num)=>total+num,0)
}
console.log(array([10,20,30]));


// 2. Implement a function that finds the maximum number in an array.
function maximun(arr) {
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if (arr[i]>max) {
           max=arr[i]        
        }
    }
  return max;
}
console.log(maximun([100,200,500]))

// 3. Write a function that returns a new array containing only the unique elements from an input array. 
function arryes(arr) {
    return [...new Set(arr)]
}
console.log(arryes([20,20,10,10,30]))

// 4. Implement a function that returns the average value of numbers in an array.
function average(num) {
    let sum=0;
    // for(let number of num) {
    //     // console.log(number)
    //     sum +=number
    // }
    for (const key in num) {
        console.log(key);
        sum +=num[key]
    }
    return sum/num.length;
}
console.log(average([10,20,30,40]))

// 5. Write a function that sorts an array of strings in alphabetical order. 
function sortstr(arr3) {
    return arr3.slice().sort()
}
console.log(sortstr(["derl","lord","tiger"]))

// 6. Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.
function arrindedx(arr4,ele) {
   let index=arr4.indexOf(ele);
   return index==-1?index:-1    
}
console.log(arrindedx(["dark"]));

// 7. Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 
function removeFalsyValues(arr) { 

    return arr.filter(Boolean); 
  
  } 
  console.log(removeFalsyValues(["hjbfhb"]))

// 8.. Implement a function that merges two arrays into a single array, alternating elements from each array
function mergeArrays(array1, array2) { 

    const mergedArray = []; 
  
    const maxLength = Math.max(array1.length, array2.length); 
  
    for (let i = 0; i < maxLength; i++) { 
  
      if (i < array1.length) mergedArray.push(array1[i]); 
  
      if (i < array2.length) mergedArray.push(array2[i]); 
  
    } 
  
    return mergedArray; 
  
  } 

// 9. Write a function that finds the second largest number in an array. 
function scondlargest(arr5) {
    arr5.sort((a,b)=>a-b)
    return arr5[1]
}
console.log(scondlargest([100,200,400,600]))

// 12- How do you use the reduce() method to sum elements in an array without using a loop?
let arr10=[10,20,30,40];
const sum=arr10.reduce((total,num)=>total+num,0);
console.log(sum+"new")

// 13- How can you flatten a nested array into a single flat array?
const arr11 = [1, [2, 3], [4, [5, 6]]];
const flaten=arr11.flat(Infinity);
console.log(flaten)

// 14- How can you find the intersection of two arrays?
let arr14=[10,1,2,3];
let arr15=[100,20,30,8];
const interaction=arr14.filter((item)=>arr15.indexOf(item));
console.log(interaction+"new1")

// 15- Write a function that swaps the first two elements in a given array (solve with destructing)
function destruuctrue(first,second,...rest) {
    return [first,second, ...rest]
}
const arr20=[100,200,400,600,700];
console.log(destruuctrue(arr20))

// 16- Explain different ways to reverse an array and show each with a code example
const arr221 = [1, 2, 3, 4, 5]
let reverse=arr221.reverse();
console.log("reverse"+ ":" + reverse)
// method2

// 17- How do you use the reduce() method to sum elements in an array without using a loop?
const numbers = [1, 2, 3, 2, 4, 2, 5];
const count = numbers.reduce((acc, curr) => (curr === 2 ? acc + 1 : acc), 0);
console.log(count)

// 18- How do you use the filter() method to filter out odd numbers from an array?
const barr=[10,20,30,40,50];
const nard=barr.filter((num)=>num%2!==0)
console.log(nard)


// new
let  arrrty=[10,20,30];
let temarr=[];
for (let index = 0; index < arrrty.length; index++) {
    temarr[index] = arrrty[index];
    console.log()
    
}
console.log(temarr)



// ---------------arr2nd-------------------
// how to find dupliacte value in array
let arryaesd=[10,20,10,30,40,50,40,50,20,60,70];
let resuslt=arryaesd.filter((ele,index,arr)=>{
    return arr.indexOf((ele)!==index);
})
console.log(resuslt)
// 2nd method
var array40 = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7];
function findDuplicates(arr) {
   return arr.filter((currentValue, currentIndex) =>
   arr.indexOf(currentValue) !== currentIndex);
}
console.log("duplicatevalue"+" : "+findDuplicates(array40))

// 2nd question count duplicate value
let arr45=["may","june","feb","feb","may","march","july"];
let resultes=arr45.reduce((obj,month)=>{
    if (obj[month]==undefined) {
        obj[month]=1
        return obj;
    }
    else{
        obj[month]++;
        return obj
    }
},{})
console.log(resultes);

// 3rd qyuetion gow tosort no
let arr59=[100,200,1,10,2,3
,4,56]
let dresult=arr59.sort((a,b)=>{
    return a - b;
})
console.log(dresult);

// 4 unique key and 5
let Id=[10,20,10,30,40,50,40,50,20,60,70];
let ides=Id.filter((ele,index,arr)=>arr.indexOf(ele)==index)
console.log(ides)

// 6 max value in using function
let harr=[10,100,200.,20.30,40,1,2];
function hmaximumvalue(arr) {
  return arr.reduce(function(pre,cur){
       return pre >cur ?pre :cur
  })  
}
// minimum
// function hmaximumvalue(arr) {
//     return arr.reduce(function(pre,cur){
//          return pre <cur ?pre :cur
//     })  
//   }
console.log(hmaximumvalue(harr))

// 7 average
let rarresd=[10,20,30,40,50];
let row= rarresd.reduce((total,no)=>total+no,0);
let ids=rarresd.length;
console.log(row/ids)

// 8 first leter to uppercase
let ippear=["may","june","feb","feb","may","march","july"];
let yupdate=[]
for (const key in ippear) {
    ippear=key.charAt(1).toUpperCase()+key.substring(1);
    yupdate.push(key)
}
console.log(yupdate)


