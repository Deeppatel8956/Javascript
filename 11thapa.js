// const camelcase=(str)=>{
//     str=str.trim().split(' ')
//     // console.log(str)
//    var str=str.forEach((cur,index)=>{
//         if (index==0) {
//             return cur.toLowerCase()
//         } else {
//             return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
//         }
//         // console.log(cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase())
//     })
//     return str.join('')
//     // return strd.join('')
// }
const camelcase=(str)=>{
    str=str.trim().split(" ")
    str=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    // return str.join(' ')
}
console.log(camelcase("hello world"))
const cample=(str)=>{
    str=str.trim().split(' ')
    str=str.reduce((accum,cur)=>{
        console.log(accum)
    })
    
}
console.log(cample('hello world'))


