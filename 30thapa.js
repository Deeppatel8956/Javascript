const genreatchar=(arr)=>{
    return arr.map((currele,index)=>{
      return `${index+1}: ${"*".repeat(currele)}`
    }).join('\n')
}
console.log(genreatchar([5,3,9,2]))