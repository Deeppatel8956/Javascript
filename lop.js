let Submit=document.getElementById("Submit");
Submit.addEventListener('click',function(e){
    e.preventDefault();
    console.log("btn click me");

    let name=document.getElementById('name').value;
    let password=document.getElementById('password').value;

    // let arr=[];
    let arr=Json.parse(localStorage.getItem("userData"));
    let ArrData={
        name:name,
        password:password
    }

    arr.push(ArrData);
    localStorage.setItem("userData",JSON.stringify(arr));
    let data=localStorage.getItem("userData");
    let Parse=JSON.parse(data);

    alert("thank you data");
    // console.log(Parse);

    htmldata='';
    Parse.forEach((user,id) => {
        htmldata+=`<tr>
        <td>${id}</td>
        <td>${user,name}</td>
        <td>${user,password}</td>
        </tr>`
        document.getElementById("showdata").innerHTML=htmldata;
    });

})