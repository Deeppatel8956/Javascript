// median
const medin=(arr)=>{
    arr=arr.sort((a,b)=>a-b)
    let lengthed=arr.length
    let mid=Math.floor(lengthed/2)

    console.log(mid)
  if (lengthed % 2 == 0) {
    // arr[mid-1] means the length calculate
    return (arr[mid]+arr[mid-1])/2
  } else {
    return arr[mid]
  }

}
console.log(medin([5,3,9,1,7]))