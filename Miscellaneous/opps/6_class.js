// class are the templates 
// provide blue print ki bacchi hui class kaisi hongi 

// class me hi constructor aajata hai and sare methods aaajet hai 


// constructor ka kaam itna hota hai ki wo values ko istammal krte hai 



class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(this);
        console.log( `hi my name is ${this.name}`);
    }
}

let p1=new Person("aditya",20);
let p2=new Person("singh",21);
// Person {name: 'aditya', age: 20}
// age: 20
// name:"aditya"
// [[Prototype]] Object
p1.talk === p2.talk  // dono ki dono same object ko refer kr rahe hote hai to yani unhone apni copy thodii na create ki 

