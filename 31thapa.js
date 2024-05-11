const Passwordvalidation=(pass)=>{
      let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(pass)
}
console.log(Passwordvalidation("paEs@123"))