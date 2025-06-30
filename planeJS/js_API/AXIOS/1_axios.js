// axios internally fetch ko use krti hai 
// but compact and better tarika hai req ko bhejne ka 
// this is library hai to installl bhi kr skte hai 
// https://github.com/axios/axios



// in html pge  <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

// fetch : ke response ek readbale format me to the but STill wo exact json nahi tha 
// fetch : object return krta tha and fir usse json nikalte the or firusse js me convert krke print karate the 
// axios me exact data mil jata hai jo hame chhaiye usko parse nahi krna padta


async function getFacts(){
    try{
        let res=await axios.get(url);  // return js data format and wahi se directly "data" key ko access kr skte hai  
        console.log(res);
        console.log(res.data);
        console.log(res.data.fact);
    }catch(e){
        console.log("error e is", e);
    }
}
getFacts(); // will return promises by deafult  