fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((Responce)=>{
    console.log(Responce)
    htmldata=''
    Responce.forEach(element => {
        console.log(element)
        htmldata +=
        `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.address["street"]}</td>
        <td>${element.address["geo"]["lng"]}</td>
        <td>${element.address["zipcode"]}</td>
        </tr>`
        document.querySelector('#data').innerHTML=htmldata
    });
})