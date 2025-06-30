function savetoDbPromise(data){

    return new Promise((resolve ,rejected)=>{  
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("data was saved ");
        }else{
            rejected("data was not saved");
        }
    });
}
savetoDb("apna college");  // promieses return object or we can se promises are object so they use catch and then method 
// promises : promis state is fullfiled  : if isske baad koi kaam karan hai to then keyword use krte hai  
// promises : promis state is rejected   if isske baad kuch karana hai to :erroraan eke karan hi reject hota hai 
// try error ko dekhne ke liye use krte hai 
// catch error ko print karane ke liye use krte hai 

let request = savetoDbPromise("aditya singh");
console.log(request); // will print promises which is an object 
// Promises{<rejected>:'failure:week connection'} if this have fullfilled state then in nest step it will run JUST NEXT block and if state is rejected then it will print just ext block 
request.then(()=>{ console.log("promsis was resolved "); console.log(request); }).catch(()=>{console.log("promsis was resolved ")});
// then ek method hai jiska kaam hai kuch kaam krna and isska kaam hai ki if promiese success to apne under wale ko run karana 



// way 2 for same thing 
savetoDbPromise("aditya singh").then(()=>{ console.log("promsis was resolved "); console.log(request); }).catch(()=>{console.log("promsis was resolved ")});
// savetoDbPromises me accha 

// ------------------------------------------------------------------------------
// promises chanining 
// if 1st data is saved then save to next data and that was also saved then go for next till either code is not completed or failure not comes
savetoDbPromise("aditya")
    .then(()=>{ 
        console.log("1st data saved ");
        savetoDbPromise("thakur")
            .then(()=>{
                console.log("2nd data saved")
                savetoDbPromise("singh")
                    .then(()=>{
                        console.log("3rd data saved")
                    })
                    .catch(()=>{
                        console.log("3rd data was failed");
                    })
            .catch(()=>{
                console.log("2nd data failued");
            })
            })})
    .catch(()=>{console.log("1st data failued ")});
// promises hell issi ko kahte hai 


// this way of writing the code 
savetoDbPromise("aditya")
    .then(() => {
    console.log("1st data saved");
    // we are returning this yani then method hai but isska return type ek object hai jaise array wagaira me hoti methods lagane pr aaray hi return hota tha ussi taraha then and catch me object ke method hai and object return karenge even khas kr ke jb object retirn kane ko bola jaaye  
    return savetoDbPromise("thakur")  // will return Promise (objects)
        .then(() => {
        console.log("2nd data saved"); 
        // again we are returning this 
        return savetoDbPromise("singh")  // will return promise (objects )  if promises return ho rah hai then and catch dubara lagaye ja skte hai 
            .then(() => {
            console.log("3rd data saved");
            })
            .catch(() => {
            console.log("3rd data failed");
            });
        })
        .catch(() => {
        console.log("2nd data failed");
        });
    })
    .catch(() => {
        console.log("1st data failed");
    });



