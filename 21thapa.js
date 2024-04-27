const truncatestring=(str,num)=>{
    return num <= 0 ?str :str.slice(0,num).concat('...')
}
console.log(truncatestring("A-taste B-postive c-negative",2))

// loop
function truncatestring2(str,count) {
    let g_Str=str
    while (g_Str.length > count) {
        g_Str = g_Str.slice(0,-1)
    }
    return g_Str
}
console.log(truncatestring2("A-taste B-postive c-negative",1))

function truncateForDropdown(inputString, maxWidth) {
    let truncatedString = inputString;
    while (truncatedString.length > maxWidth) {
       truncatedString = truncatedString.slice(0, -1);
    }
   
    return truncatedString;
   }
   
   // Example Usage:
   const originalString = "JavaScript is dynamic and efficient!";
   const truncatedDropdownString = truncateForDropdown(originalString, 2);
   console.log(truncatedDropdownString); // Output: "JavaScript"
   
