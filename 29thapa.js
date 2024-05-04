const calculatedate=(d1,d2)=>{
  var t1=new Date(d1)
  var t2=new Date(d2)

  let diff=Math.abs(t1-t2)
  return diff/(24*60*60*1000)
}
console.log(calculatedate("2024-01-01","2024-01-31"))