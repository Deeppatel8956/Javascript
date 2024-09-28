let  message:string = "hello world!";
let hello_God:string="gof"
let combine=message.concat(hello_God)
console.log(combine);


// length
let sentence:string="god is better than you"
let row_answer:number=sentence.length
console.log(row_answer)

// uppercase and lowercase
    let Word:string=" dark"
    let upper_Word:string=Word.toUpperCase()
    let lpper_Word:string=Word.toLowerCase()
console.log(upper_Word)
console.log(lpper_Word)

// Substring
let sub_str: string = "iamthegreat and you";
let sub_length: string = sub_str.substring(0, 5);
console.log(sub_length);


// return true false
let first_word:string="hello"
let second_word:string="hello"
if (first_word==second_word) {
    console.log(true)
} else {
    console.log(false)
}

// templet leteral
let product:string="Milke"
let price:number=10
let final_bill:any=`The product name is ${product} and ${price} doller`
console.log(final_bill)


