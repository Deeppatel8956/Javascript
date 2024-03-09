// palinodrome
function new_isPalindrome(str) {
    let len=str.length
    for(let i=0;i<len/2;i++){
        if (str[i] !==str[len-i-1]) {
            return "not palindorme"
        }else{
            return "palindrome"
        }
    }
}
console.log(new_isPalindrome("lool"))

// find dupllicate value
let array=[1,2,3,4,5,3,5,4,2]
function new_Duplicdate(array) {
    let answer=array.filter((indexd,item)=>array.indexOf(indexd)!==item)
    return answer
}
console.log(new_Duplicdate(array))



// remove duplicate value
function Remove(arr) {
    return arr.filter((indexc,item)=>arr.indexOf(indexc)===item)
}
console.log(Remove(array))

// 2nd method
let c1=new Set(array)
console.log("2nd method :",c1)
