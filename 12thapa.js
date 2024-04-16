const checkuppercase=(str)=>{
    return str===str.toUpperCase()?true:false
}
console.log(checkuppercase('s'))

const checkuppercase2=(str)=>{
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0)<=95) {
        return true
    }
    return false
}
console.log(checkuppercase2('S'))