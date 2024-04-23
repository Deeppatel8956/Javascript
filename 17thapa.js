// repeat number
const repet_Number=(arr)=>{
    let pair={}
    for(let first of arr) {
        if (pair[first]) {
            pair[first]++
        } else {
            pair[first]=1
        }
    }
    return pair
}
console.log(repet_Number([1,1,2,3,3,4,5,4,5]))