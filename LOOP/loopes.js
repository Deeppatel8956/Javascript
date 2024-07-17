// Print Numbers from 1 to 10:
for (let index = 0; index <=10; index++) {
    console.log(index)
    
}

// Print a 2D Array:
function Two_d(arr) {
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[0].length;j++){
            console.log(arr[i][j]);
        }
    }
}
var arr = [[1, 2], [3, 4], [5, 6]];
Two_d(arr)


// Print Even Numbers in an Array:
function evenNumber(arr) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0) {
            console.log(arr[i])
        }
    }
}
var arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
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


// Async Loop Using setTimeout:
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 5000); // Outputs: 5 5 5 5 5
}


// Calculate the Power of a Number:
function Calculate_the_Power(num,pow) {
    let res=1
    for(let i=0;i<pow;i++){
        res*=num
    }
    return res
}
console.log(Calculate_the_Power(4,2))


// Count the Number of Digits in a Number:
function Count_digiites(num) {
    let count=0
    while (num>0) {
        num=Math.floor(num/10)
        count++
    }
    return  count
}
console.log(Count_digiites(8324))


// Calculate the Sum of Digits in a Number:
function Calculate_Sum_Digits(num) {
    let sum=0
    while (num >0 ) {
        let random=num%10
        sum+=random
        num=Math.floor(num/10)
    }
    return sum
}
console.log(Calculate_Sum_Digits(1234))

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
console.log(checkele(arr5,10))


// Remove Duplicates from an Array:
function removeDuplicate(arr) {
    let uniquearr=[]
    for(let i=0;i<arr.length;i++){
        if (!uniquearr.includes(arr[i])) {
            uniquearr.push(arr[i])
        }
    }
    return uniquearr
}
var arr6 = [10, 20, 30, 20, 40, 10, 50];
console.log(removeDuplicate(arr6))


function reverse_str(params) {
    let t=[]
    for(let i=params.length-1;i>=0;i--){
        t.push(params[i])
    }
    return t
}


function isPalindrome(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
var arr87 = [1, 2, 3, 2, 1];
var arr78 = [10, 20, 30, 40];
console.log(isPalindrome(arr87)); // Outputs: true
console.log(isPalindrome(arr78)); // Outputs: false


// find avarage
function findavr(arr) {
    let suyum=0
    for(let i=0;i<arr.length;i++){
        suyum+=arr[i]
    }
    return suyum/arr.length
}
var arr10 = [12, 18, 24, 30];
console.log(findAverage(arr10));