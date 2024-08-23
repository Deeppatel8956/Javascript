var data = [
    { id: 1, name: "dol", email: "dol@gmail.com" },
    { id: 2, name: "dol", email: "dol@gmail.com" }
];

function readAll() {
    // Store data in local storage
    localStorage.setItem('object', JSON.stringify(data));

    // Get the table body element
    var tableBody = document.querySelector('.data_table ');

    // Retrieve data from local storage
    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);

    // Generate table rows dynamically
    var element = '';
    objectdata.map((record)=>(
        element += `<tr>  
                    <td>${record.name}</td>
                    <td>${record.email}</td>
                    <td><button class='' onclick='edit(${record.id})'>Edit</button>
                    <button class='' onclick='delete_data(${record.id})'>Delet</button></td>
        </tr>`
    ))
    tableBody.innerHTML=element
   
}

// create form visable
function create(){
    document.querySelector('.create_form').style.display='block'
    document.querySelector('.add_div').style.display='none'
}


// working data add
function add() {
    var name=document.querySelector('.name').value
    var email=document.querySelector('.email').value

    var newobj={id:3,name:name,email:email}
    data.push(newobj)

    document.querySelector('.create_form').style.display='none'
    document.querySelector('.add_div').style.display='block'

    readAll()
}


// edit button
function edit(id){
    document.querySelector('.update_form').style.display='block'
    var obj=data.find(rec => rec.id === id)
    document.querySelector('.uname').value=obj.name
    document.querySelector('.uemail').value=obj.email
    document.querySelector('.id').value=obj.id
}


// update data
function update(){
    var id=parseInt(document.querySelector('.id').value)
    var name=document.querySelector('.uname').value
    var email= document.querySelector('.uemail').value

    var index=data.findIndex(rec => rec.id === id)
    data[index]={id,name,email}
    document.querySelector('.update_form').style.display='none'

    readAll()
}

// delete data
function delete_data(id) {
   data= data.filter(rec => rec.id !== id)
    readAll()
}

