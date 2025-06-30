// constructor khuch bhi return nahi krte hai
// somthing which is better than last case 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method using prototype (memory efficient)
Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// new keywords can do 
// create blank object just blank 
// function and person ka protype same ho jaeyag 
// new kya kerga ki blanks objects ko constructor ke pass bhej dega and constructor ke under this uss blank object ke inputs honge 
// ek interview wali baat without new keyword this of constructor will br refrncing window object 
// while with new keywords this beacome calling objects 
let p1 = new Person("Adam", 25);
let p2 = new Person("Eve", 23);
let p3 = new Person("Ravi", 28);
let p4 = new Person("Sneha", 22);

p1.talk === p2.talk  // same referacng point use ho raha hai 



// new key word allow if we have any kind of constructor(type of function) then we can create  new instances 
