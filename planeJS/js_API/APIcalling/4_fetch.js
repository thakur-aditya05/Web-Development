// XMLHttpRequest ---> isss method me a) object bana ke request bhejte the but issme promises and async-await ko use nahi kr skte the 
// better method 
// fetch 


// fetch() will return  promises 

let url="https://catfact.ninja/fact ";
fetch(url);
// go to NEtwork ---> and go to response(out of header preview Response initiator)

fetch(url); // will retunrn promises bydeafult now we can obv use promises

fetch(url)
    .then((res)=>{
        console.log(res);  // this will print object but of different format 
        
        console.log(res.json()); // will return promises 

        res.json().then((data)=>{
            console.log(data); // this will give proper json format data 

        })
    })
    .catch((err)=>{
        console.log("ERROR- ",err);
    })