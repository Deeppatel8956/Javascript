// 1st way
// function is_Palindrome(str) {
//     let j=str.length-1
//     for (let i = 0; i < str.length/2; i++) {
//         if (str[i]!=str[j]) {
//             return false
//         }
//         j--
//     }
//     return true
// }
// console.log(is_Palindrome('lool'))


// 2nd way
// function is_Palindrome(str) {
//     let j=str.split('').reverse().join('')
//     if (j===str) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(is_Palindrome('lool'))


// 3rd way
function isPalindrome(str) {
	let rev = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev += str[i];
	}
	if (rev == str) {
		return true
	} else {
		return false;
	}
}

let str1 = "racecar";


console.log(isPalindrome(str1));

