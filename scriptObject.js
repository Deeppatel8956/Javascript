//singleton
// Object.create
// const insTa=new Object();
// console.log(insTa)


//Object literals
const mySm=Symbol("key1");
const Jsuser={
    name:"harish",
    "fullname":"harish shah",
    [mySm]:"mykey1",
    age:20,
    location:"jaipur",
    email:"hitesh@google.com",
    isLogin:false,
    lastLogindays:["monday","saturday"]
}
// console.log(Jsuser["age"])
// console.log(Jsuser["fullname"])
// console.log(Jsuser[mySm])
Jsuser.age=30
// Object.freeze(Jsuser);
// console.log(Jsuser);

// Jsuser.tset=function(){
//     console.log(`Hello my name is ${this.name}`)
// }
// console.log(Jsuser.tset())



const inSTa={}
// console.log(inSTa)
inSTa.id=1
inSTa.name="joker"
inSTa.email="joker@gamil.com";
// console.log(inSTa)
// let test={
//     age:30,
//     fullName:{
//         userName:{
//             firstName:"Dave",
//             lastName:"geeta"
//         }
//     }
// }
// console.log(test.fullName.userName["firstName"])

//Object assign method
// let obj1={1:"a",2:"d"}
// let obj2={3:"n",4:"h"}
// let obj3={5:"m",6:"k"}
// // let obj4=Object.assign({},obj1,obj2,obj3)
// let obj4={...obj1,...obj2,...obj3}
// console.log(obj4)
// console.log(Object.keys(inSTa));
// console.log(Object.values(inSTa));
// console.log(Object.entries(inSTa));

//Object destructre
let test2={
    name:"demo",
    phoneno:136554321321,
    location:"Raypur"
}

const {name}=test2
console.log(name)