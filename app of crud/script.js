function vaildeform() {
    var name=document.getElementById('name').value
    var age=document.getElementById('age').value
    var address=document.getElementById('adress').value
    var email=document.getElementById('email').value

    if (name == '') {
        alert('please enter name')
        return false
    }

    if (age == '') {
        alert('write your age')
        return false
    }
    else if (age < 1) {
        alert("age must be zero")
        return false
    }

    if (address=='') {
        alert('enter your address')
        return false
    }


    if (email=='') {
        alert('enter your email')
        return false
    }else if (!email.includes('@')) {
        alert('invaild email')
        return false
    }

    return true
}

function showdata() {
    var peopleList
    if (localStorage.getItem('peopleList')==null) {
        peopleList=[]
    }
    else{
        peopleList=JSON.parse(localStorage.getItem('peopleList'))
    }

    var html=''

    peopleList.forEach((ele,index)=>{
        html+="<tr>"
        html+="<td>"+ele.name+"</td>"
        html+="<td>"+ele.age+"</td>"
        html+="<td>"+ele.address+"</td>"
        html+="<td>"+ele.email+"</td>"
        html += "<td>";
        html += `<button onclick="deleteindx(${index})">Delete</button>`;
        html += `<button onclick="updateindx(${index})">Update</button>`;
        html += "</td>";
        html+="<tr>"
        
    })

    document.querySelector('#crudtable').innerHTML=html
}

document.onload=showdata()

function Addtodo() {
    if (vaildeform()==true) {
        
    
    var name=document.getElementById('name').value
    var age=document.getElementById('age').value
    var address=document.getElementById('adress').value
    var email=document.getElementById('email').value


    var peopleList
    if (localStorage.getItem('peopleList')==null) {
        peopleList=[]
    }
    else{
        peopleList=JSON.parse(localStorage.getItem('peopleList'))
    }

    peopleList.push({
        name:name,
        age:age,
        address:address,
        email:email
    })
    localStorage.setItem('peopleList',JSON.stringify(peopleList))
    showdata()
    document.getElementById('name').value=""
document.getElementById('age').value=""
    document.getElementById('adress').value=""
    document.getElementById('email').value=""
    }
}

// deletedata
function deletedata(index) {
    var peopleList
    if (localStorage.getItem('peopleList')==null) {
        peopleList=[]
    }
    else{
        peopleList=JSON.parse(localStorage.getItem('peopleList'))
    }

    peopleList.slice(index,1)
    localStorage.setItem('peopleList',JSON.stringify(peopleList))
    showdata()
}


// update
function update(index) {
    // submit button
    document.getElementById('submit').style.display='none'
    document.getElementById('submit').style.display='block'

    var peopleList
    if (localStorage.getItem('peopleList')==null) {
        peopleList=[]
    }
    else{
        peopleList=JSON.parse(localStorage.getItem('peopleList'))
    }

    document.getElementById('name').value=peopleList[index].name
    document.getElementById('age').value=peopleList[index].age
        document.getElementById('adress').value=peopleList[index].address
        document.getElementById('email').value=peopleList[index].email

    document.querySelector('#Update').onclick=function () {
        if (vaildeform()==true) {
            
    document.getElementById('name').value=peopleList[index].name
    document.getElementById('age').value=peopleList[index].age
        document.getElementById('adress').value=peopleList[index].address
        document.getElementById('email').value=peopleList[index].email

        localStorage.setItem('peopleList',JSON.stringify(peopleList))
        showdata()

        document.getElementById('name').value=""
document.getElementById('age').value=""
    document.getElementById('adress').value=""
    document.getElementById('email').value=""

  document.getElementById('submit').style.display='none'
    document.getElementById('submit').style.display='block'
        }
    }    
}