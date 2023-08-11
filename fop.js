
// fetch('https://dog.ceo/api/breeds/image/random/5')
// .then((res)=>res.json())
// .then((Response)=>{
//     console.log(Response.message);
// //     
// })
fetch('https://dog.ceo/api/breeds/image/random')
.then((res)=>res.json())
.then((Res)=>{
    console.log(Res.message);
    let data=Res.message;
    htmldata=''
    data.forEach(element => {
        htmldata+=`<tr>
        <td><img src='${element}'</td></tr>`
     document.getElementById('dogdata').innerHTML=htmldata
    });
}).catch((err)=>{
    console.log("reenter api");
})