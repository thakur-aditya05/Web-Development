let url="https://catfact.ninja/fact ";
fetch(url);
// go to NEtwork ---> and go to response(out of header preview Response initiator)

fetch(url); // will retunrn promises bydeafult now we can obv use promises

// fetch(url)
//     .then((res)=>{
//         console.log(res);  // this will print object but of different format 
        
//         console.log(res.json()); // will return promises 

//         res.json().then((data)=>{
//             console.log(data); // this will give proper json format data 

//         })
//     })
//     .catch((err)=>{
//         console.log("ERROR- ",err);
//     })


fetch(url)
    .then((res)=>{
        console.log(res);  // this will print object but of different format 
        console.log(res.json()); // will return promises 
        return res.json();
        })
        .then((data)=>{
            console.log(data);
            console.log(data.fact)
        })
    .catch((err)=>{
        console.log("ERROR- ",err);
    })



fetch(url)
    .then((res)=>{
        console.log(res);  // this will print object but of different format 
        console.log(res.json()); // will return promises 
        return res.json();
        })
        .then((data)=>{
            console.log(data);
            console.log(`data1=${data.fact}`)
            return fetch(url);
        })
        .then((data)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(`data2=${data.fact}`)
        })
    .catch((err)=>{
        console.log("ERROR- ",err);
    })


console.log("js synchronously kaam kr rahai hai js unke wait nahi kr raha hai  ");
