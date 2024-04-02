const getcapital=(str)=>{
    if (str.length > 280||str.trim().length===0) {
        return false;
    }
    str=str.split(" ")
    str=str.map((cur)=>{
       return cur.charAt(0).toUpperCase()+cur.slice(1)
    })
    str=str.join(" ")
    return str
}
console.log(getcapital("welcome to my channel"))

// count sigle word
const count=(word,char)=>{
     word=word.toLowerCase()
     char=char.toLowerCase()
     toalcoun=word.split("").reduce((accum,charch)=>{
        if (charch==char) {
            accum++
        }
        return accum
     },0)
     return toalcoun
}
console.log(count('MissIssippi','I'))

// check triangle
const checktr=(a,b,c)=>{
    if (a==b&&b==c) return "equilateral"
    if(a==b || b==c || c==a) return "isosceles"    
}

const ascendong=(arr)=>{
    return arr.sort((a,b)=>a-b)
}
console.log(ascendong([5,4,3,2,1]))

const ispalidrome=(str)=>{
    str=str.toLowerCase()
    let r_str=str.split("").reverse().join("")
    return str==r_str?true:false
}
console.log(ispalidrome('racecar'))

const findmax=(arr)=>{
    console.log(Math.max(100,20,1))
}
findmax()