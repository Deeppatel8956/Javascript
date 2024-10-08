class Person{
name:string;
age:number;
hobbies:string[];

constructor (name:string,age:number,hobbies:string[]){
    this.name=name;
    this.age=age;
    this.hobbies=hobbies;
}
}

let person3:Person=new Person("god",20,["dark"])