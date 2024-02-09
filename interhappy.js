function longest_Word(sentence) {
    const words=sentence.split(" ")
    let longestword=""
    for(let word of words) {
        if (word.length > longestword.length) {
            console.log(word.length)
            console.log("sescond length",longestword.length)
            longestword = word
        }
    }
    return longestword
}
console.log(longest_Word("I love coding in Javascript"))
// ruf run
// I>love
// love>coding
// in>javascript

// q2
function is_Palindrome(str) {
    let result=str.split("").reverse().join("")
    return result===str
}
console.log(is_Palindrome("racecar"))
console.log(is_Palindrome("loop"))

// q3
// first way
function remove_Duplicate(arr) {
    return arr.filter((ele,item,arred)=>arred.indexOf(ele)===item)   
}
arr=[1,2,3,4,4,5,6,6]
console.log(remove_Duplicate(arr))

// second way
function secondremove_Duplicate(arr) {
    let uniqueelement=[]
    for(let i=0;i<arr.length;i++){
        if (uniqueelement.indexOf(arr[i])===-1) {
            uniqueelement.push(arr[i])
        }
    }
    return uniqueelement
}
console.log(secondremove_Duplicate([1,2,2,3,4,4,5,6,6]))

// third way
function third_Dupli(arr) {
    return [...new Set(arr)]
}
console.log(third_Dupli([1,2,2,3,4,4,5,6,6]))

// q4
let a1="Mary"
let a2="Army"
a2
function angarmes(str1,str2) {
    var b1=str1.toLowerCase()
    var b2=str2.toLowerCase()

   let c1= b1.split("").sort().join("")
   let c2= b2.split("").sort().join("")

   return c1===c2
}
console.log(angarmes(a1,a2))

// q5
function first_Capital(word) {
    // const mySentence = ;
var words = word.split(" ");

var c1=words.map((worded) => { 
    return worded[0].toUpperCase() + worded.slice(1); 
}).join(" ");
return c1

}
console.log(first_Capital("hello i am superhero"))


// second way
function name_Str(str) {
    return str.replace(/\w/,str=>str.toUpperCase())
}
console.log(name_Str("freecode acmp is"))




