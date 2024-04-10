const Power_of_2=(n)=>{
    if(typeof n!=='number'){
        return 'negative value'
    }else{
        console.log(n-1)
        return n&&(n&(n-1))==0
    }
}
console.log(Power_of_2(8))

// 2nd method
const Power_of_21=(n)=>{
    var op=false
    for(let i=1;i<n;i++){
        // console.log(2**i)
        // console.log(i)
        if (2**i==n) {
            op=true
        }
    }
    return op
}
console.log(Power_of_21(8))