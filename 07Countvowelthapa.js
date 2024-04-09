const couunt_Vowel=(arr)=>{
    let vowelRegex = /[aeiou]/gi;
    let m_Str=arr.match(vowelRegex)
    if (m_Str) {
        return m_Str.length
    }
    else{
        return 0
    }
}
console.log(couunt_Vowel("Hello world"))


// 2nd method
const c_Vowels=(arr)=>{
    let vowels=['a','e','i','o','u']
    arr=arr.split("")
    let count=0
    for(let first of arr) {
        if (vowels.includes(first.toLowerCase())) {
            count++
        }
    }
    return count
}
console.log(c_Vowels("Hello world"))