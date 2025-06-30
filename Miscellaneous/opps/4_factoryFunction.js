function PersonMaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`hi, my name is ${this.name}`);
        },
    };
    return person;

}

// sort way of eriting function 
const p1 = PersonMaker("Aditya", 22);
const p2 = PersonMaker("Priya", 25);
const p3 = PersonMaker("Ravi", 30);
const p4 = PersonMaker("Sneha", 19);
 




// disadvantage 
// hrr person/objecs apni khud ki copy banata hai 
p1.talk === p2.talk // alag alag copy bnti hai and space occupy karegi hrr copy 
