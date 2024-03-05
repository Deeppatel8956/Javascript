let a      ="LoremipsudolositametconsecteturadipisicingelitSedcorrupticumplaceatquodQuisaccusamusavoluptatemHarumenimtotamdeseruntBeataetemporeoptioeligendialiquamveniamobcaecativoluptasIpsamLoremipsumdolorsitametconsecteturadipisicingelitEligendietnemoinventoredolor teneturnequeeaarchitectoquasiconsectetunihilplaceatConsequunturnisiquasiipsafacilisAdevenietperspiciatisipsa"


// 1st way
// function new_Countstr(str) {
//     let result={}
//     for(let char of str) {
//         if (result[char]) {
//             result[char]++
//         } else {
//             result[char]=1
//         }
//     }
//     return result
// }

// let new_Answer=new_Countstr(a)
// console.log(new_Answer)


// 2nd way
function new_Countstr(str) {
    let result={}
    for (let key in str) {
        // console.log(str[key])
        if (result[str[key]]) {
            result[str[key]]++
        } else {
            result[str[key]]=1
        }
    }
    return result
}
let new_Answer=new_Countstr(a)
console.log(new_Answer)


