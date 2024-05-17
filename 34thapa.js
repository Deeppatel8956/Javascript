const Hexcolor=(hexcolor)=>{
    let regular=/[A_Faf\d]{3}|[A_Fa-f\d]{6}/
    return regular.test(hexcolor)
}
console.log(Hexcolor("#fff"))