const randomcolor=()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(randomcolor())

const randomcolor2=()=>{
    let r_Color=Math.floor(Math.random()*1677215).toString(16)
    return `#${r_Color.padStart(6,0)}`
}
console.log(randomcolor2())

const randomcolor3=()=>{
    let r_Color1=Array.from({length:6},()=>Math.floor(Math.random()*16).toString(16)).join('')
    return `#${r_Color1}`
}
console.log(randomcolor3())


const randomColor4 = () => {
    const randomHex = Math.floor(Math.random() * 0xFFFFFF); // 0xFFFFFF represents the decimal value of FFFFFF
    return `#${randomHex.toString(16).padStart(6, '0')}`;
};

console.log(randomColor4());
