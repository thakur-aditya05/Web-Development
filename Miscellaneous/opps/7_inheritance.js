class Person{
    constructor(name,age){
        console.log(`${this.constructor.name} construtor is been called `);
        this.name=name;   // 
        this.age=age; 
    }
    talk(){
        console.log(`hi, I am ${this.name}`);
    }
}





// class Student{
//     constructor(name,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//     }
//     talk(){
//         console.log(`hi, i am ${this.name}`);
//     }
// }


// class Teacher{
//     constructor(name,age,subject){
//         this.name=name;
//         this.age=age;
//         this.subject=subject;
//     }
//     talk(){
//         console.log(`hi, i am ${this.name}`);
//     }
// }



class Student extends Person{  // inheriting properties of parents class
    constructor(name,age,marks){
        console.log(`${this.constructor.name} construtor is been called `);
        super(name,age);// parents class constructor is been called 
        this.marks=marks;
    }
}


class Teacher extends Person{ // inheriting properties of parents class
    constructor(name,age,subject){
        console.log(`${this.constructor.name} construtor is been called `);
        super(name,age); // // parents class constructor is been called 
        this.subject=subject;
    }
}



let s1=new Student("adam", 25,95);
let T1=new Teacher("adam", 25,95);


// --------------------------------------
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}
class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wooff..");
    }
    eat() {  // dog is eating 
        console.log("I am eating");
    }
}
class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow..");
    }
    eat() {  // cat is eating 
        console.log("I am eating");
    }
}
let d = new Dog("Tommy");
d.eat();       // from Mammal
d.bark();      // Dog's own method

let c = new Cat("Whiskers");
c.eat();       // from Mammal
c.meow();      // Cat's own method

