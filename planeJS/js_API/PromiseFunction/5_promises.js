// we want to make to save our data if speed of net is greater than 

function savetoDb(data){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        console.log("your data was saved : ", data);
    }else{
        console.log("data was not saved ");
    }
}
savetoDb("apna college");





// ------------------------------------------------------------------

function savetoDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success(data);
    }else{
        failure(data);
    }
}
// Example of callback hell
savetoDb(
    "apna college",   // 1st data was saved 
    (d) => {
        console.log("your data was saved:", d);

        savetoDb(
            "hello aditya", // 2nd data was saved affter success of 1st data
            (d) => {
                console.log("your data was saved:", d);

                savetoDb(
                    "nested call", // 3rd data was saved affter success of 2 1st data 
                    (d) => {
                        console.log("your data was saved:", d);
                    },
                    () => {
                        console.log("data was not saved");
                    }
                );

            },
            () => {
                console.log("data was not saved");
            }
        );

    },
    () => {
        console.log("data was not saved");
    }
);
// yaar kaam to bilkul simple sa hi kr rahe hai ki ek data success ho 
//  fir 2nd data dala jaaye and uske succes ke baad hi third data dala jaaey 

// ye upper wali asynchronous structure hi hai ki ek ho fir 

// A good candidate for converting to Promises or async/await.
// ------------------------------------------------------------------














// --------------------------------------------------
// promises  javasript ki hi ek object hai 
// PROMIsis ek object hai which promises for eventual success and failure of the operation ko difine krte hai or failure hai to kyo hai or sucess hai t kya hai 

// promises ek object hai jo key and value ke form ke kuch return krta hai 
// isske under do further concept aate hai resole and and reject 
// resolve is called success call back and 
// reject called fauilare call back 

// koi bhi asynchronous function (means function uotput is depandant on lots of parameter and need separate time to execute jo js cant waits for it )  ke under "savetoDb(data,success,failure)" callback (success,failure) lene ke bajaye Promises return kr dete hai 
// yani kaam karwane ki jagah ek object return kr dega  
function savetoDbPromise(data){

    // FUNCTION returning the promies may success and failure 
    return new Promise((success,failure)=>{  // // promises object ke under callback use karenge jo eventually failure and success ko dikhayega
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            // success(data);
            success("data was saved ");

        }else{
            // failure(data);
            failure("data was not saved");

        }
    });
    // upper wale function ko ye nahi pata rahega hrr execution me output success hoga ya filure but inn dono me se kuch to hoga     
}
savetoDb("apna college"); //  will return the promies which is an object <fullfiled> , undefined 
// in this js console we have seen that promises hav multiple state pending(we dont know weather promise will comlete or not ) reject ( failure )
// inhi promiese ke basis pe aage ke kaam decide honge 