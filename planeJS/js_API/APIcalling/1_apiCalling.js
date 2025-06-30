// when two software interact with each other wo apis ko use krt hai 
// jo apis http ka use krti hai yani internet ke basis pe interation deti hai wo web apis hoti hai 
// Normal software apis vs Http apis  

// web apis return data in form of JSON(computer readable type ) format 
// cliest --->requets-->api(url-endpoint-link all three are same thing)--->


// https://catfact.ninja/fact 
// https://www.boredapi.com/api/activity
// https://dog.ceo/api/breeds/image/random

// apis link hoti hai jisnko access krte hai request bhejte hai fir wo return me hame respose bhejti haai 
// google apis (map)
// google direction apis https://developers.google.com/maps/documentation/directions/overview


// json formta 
// sirf ek format hai 
// python me bhi pais ke saath kaam krte samay json api ko use kr skte hai 
// XML -->older verson jaise aaj json hai (similar  to html format )
// all keys of nonmutable string type: // undefined as a value kuch nahi hota hai 
// https://www.json.org/json-en.html
// https://jsonlint.com/ (json validators)





let jsonRes = '{"fact":"A tomcat (male cat) can begin mating when he is between 7 and 10 months old.","length":76}'; // ek string format data hai ye 6 
console.log(jsonRes); 
// to convert JSON object to js object 
let validJSRes=JSON.parse(jsonRes);
console.log(validJSRes);

// to convert js object to JSON format 
let student = {name:"aditya singh", marks:80};
let validJsonRs=JSON.stringify(student);




































