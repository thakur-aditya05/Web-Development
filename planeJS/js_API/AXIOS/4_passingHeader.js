// Accepted Accept headers:

// text/html - HTML response (default response format)
// application/json - JSON response
// text/plain - Plain text response

// https://icanhazdadjoke.com/api

// passing header to apis 

const url = "https://icanhazdadjoke.com/api";
async function getJokes(){
    try{
        let res = await axios.get(url);
        console.log(res);
        console.log(res.data);  // we are getting html format data 
    }catch(e){
        console.log(e);
    }
}

async function getJokes2(){
    try{
        const config={headers:{Accept:"application/json"}};  // send me data inform of json 
        let res = await axios.get(url,config);  // url ke saath config bhi bhejo to send heder data 
        console.log(res);
        console.log(res.data);  // we are getting html format data 
    }catch(e){
        console.log(e);
    }
}
