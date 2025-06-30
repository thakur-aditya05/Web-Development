// ----------------------------------------------------
// array se varibale nikalna 
// no arrray will be affted 

// storing values of arrray into multi variables it is seen in various areas
let names = ["thakur","aditya","singh","chauhan"];

// let firstName =names[0];
// let middleName =names[1];
// let lastName =names[2];

let [firstName,middleName,lastName]=names;



console.log(firstName,middleName,lastName) 
// -----------------------------------------------------





// -----------------------------------------------------
// lets use desturcture and rest concept together 
let array1 = ["Toney", "Aditya", "Aman", "Ravi", "Sneha"];

let [first1,second2,other]=array1; // alag hai bhai 
let [first,second,...others]=array1;
console.log(first,second,other) 
// -----------------------------------------------------






// -----------------------------------------------------
// lets use desturcture and rest concept together FOR OBJECT
let student = [
    {
        name: "Toney",
        class: 10,
        section: "A",
        roll: 1,
        marks: 85,
        password:142542,
    }
]

// way 1
let username1=student.username;
let password2=student.password;

// way 2
let {name,password}=student;

// way 3
// destructured and default values is been setted 
// let {name:username,password:passkey,city="mumbai"}=student;


// way 3 but ye mst tarika hai key city hai but place sirf variable naam hai 
let {name:username,password:passkey,city:place="mumbai"}=student;
// -----------------------------------------------------
