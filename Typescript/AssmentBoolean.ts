function isEven(n:number):boolean {
    return n % 2==0
}
console.log(isEven(5))

// both 4 and 8
function fourandeigth(num:number):boolean {
    if (num / 4 && num / 8 == 0) {
        return true
    } else {
        return false
    } 
}
console.log(fourandeigth(32))

// bigint
// let bigint_num=90071992547409925
// let anothernumber=BigInt("90071992547409925")

// let difference=bigint_num-anothernumber
// let product=bigint_num*anothernumber
// let division=bigint_num/anothernumber
// console.log(difference)
// console.log(product)
// console.log(division)