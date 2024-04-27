const fibonaci=(num)=>{
    if (num <= 1) {
        return num
    } else {
        console.log(fibonaci(num-1)+fibonaci(num-2))
          return fibonaci(num-1)+fibonaci(num-2)        
    }
}
console.log(fibonaci(5))