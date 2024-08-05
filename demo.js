let data=[
    {id:1,name:"god",email:"df@gmail.com"},
    {id:2,name:"god",email:"df@gmail.com"}
]

function readAll() {
    localStorage.setItem('object',JSON.stringify(data))
    let tabeldata=document.getElementById('')

    var obj=localStorage.getItem('object')
    var objecttable=JSON.parse(obj)
    var element=''

    objecttable.map((ind)=>(
        element+=`
        <ul>
           <li>${ind.id}</li>
        </ul>`
    ))

    tabeldata.innerHTML=element
}

function create() {
    document.getElementsByClassName('create-form').style.display='block'
    document.getElementsByClassName('Add-div').style.display='none'
}

function add() {
    var name=document.getElementsByClassName('name').value
    var email=document.getElementsByClassName('email').value

    var newobj={id:3,name:name,email:email}
    data.push(newobj)

    document.getElementsByClassName('create-form').style.display='none'
    document.getElementsByClassName('Add-div').style.display='block'
    readAll()
}

function delete_A(id) {
    data=data.filter(rec => rec.id !==id)
    readAll()
}