// Print a 2D Array:
function twodArry(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(arr[i][j])
        }
    }
}
var arr = [[1, 2], [3, 4], [5, 6]];
twodArry(arr)

// Print Even Numbers in an Array:
function evenNumber(arr) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0) {
            console.log(arr[i])
        }
    }
}
let  arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
evenNumber(arr2)

// Delete All Occurrences of an Element in an Array:
function delete_Ele(arr,ele) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]===ele) {
            arr.splice(i,1)
        }
    }
    return arr
}
var arr3 = [23, 56, 4, 78, 5, 63, 45, 210, 56];
ard=delete_Ele(arr3,56)
console.log(ard)

// Calculate the Power of a Number:
function pow(num,pow) {
    let res=1
    for(let i=0;i<pow;i++){
        res*=num
    }
    return res
}
console.log(pow(4,2))

// Count the Number of Digits in a Number:
function Calculate_Sum_Digits(num) {
    let count=0
    while (num > 1) {
        num=Math.floor(num%10)
        count++
    }
    return count
}
console.log(Calculate_Sum_Digits(8324))

// sum
function Calculate(num) {
    let sum=0
    while (num > 0) {
        let random=num%10
        sum+=random
        num=Math.floor(num%10)
    }
    return num
}
console.log(Calculate(1234))

// Find the Maximum Value in an Array:
function findmax(arr) {
    var max=arr[0]
    for(let i=0;i<arr.length;i++){
        if (arr[i] > max) {
            max=arr[i]
        }
    }
    return max
}
var arr4 = [34, 12, 56, 78, 23, 90];
console.log(findmax(arr4))

// Check if an Array Contains a Specific Element:
function checkele(arr,ele) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]==ele) {
            return true
        }
    }
    return false
}
var arr5 = [10, 20, 30, 40, 50];
console.log("god",checkele(arr5,10))

// Remove Duplicates from an Array:
function removeDuplicate(arr) {
    let unique=[]
    for(let i=0;i<arr.length;i++){
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique
}
var arr6 = [10, 20, 30, 20, 40, 10, 50];
console.log(removeDuplicate(arr6))


// find avarage
function findavr(arr) {
    var sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length
}
var arr10 = [12, 18, 24, 30];
console.log(findAverage(arr10));