// async- await for fetch 

let url="https://catfact.ninja/fact";

async function getFetch(){
    let res=fetch(url);
    console.log(res);
    // may print undefinded beacause may be api fetching call may be not completed 
    // abhi tk apis se response dhang se nahi aaya tha aur js puri execute hoke khatam  ho gyi 

}

async function getFetch2(){
    let res= await fetch(url); // jb tk ye khatam nahi ho jati tb tk js wait karaiga sbko 
    console.log(res); // jaise hi asynch kaam complete hoga uske baad print hoga 
    let data=await res.json(); // will print js format fo msg 
    console.log(data.fact);

    // if koi error aat ahai to error jaha aaya hoga use baad kaam js ka ruk jayega but wo na ruke uske liye 
}


async function getFetch3(){
    try{
            let res= await fetch(url); // jb tk ye khatam nahi ho jati tb tk js wait karaiga sbko 
        console.log(res); // jaise hi asynch kaam complete hoga uske baad print hoga 
        let data=await res.json(); // will print js format fo msg 
        console.log(data.fact);
    }catch(e){
        console.log("error--",e);
    }

    console.log("error ke aane ke baad bhi code run karega ");
}
getFetch3();




async function getFetch3(){
    try{
        let res1= await fetch(url);   
        let data1=await res1.json(); 
        console.log(data1.fact);


        let res2= await fetch(url);   
        let data2=await res2.json(); 
        console.log(data2.fact);

    }catch(e){
        console.log("error--",e);
    }
    
    console.log("error ke aane ke baad bhi code run karega ");  // ye asynch -await ka success 
    return "kahtam " ; // 
}
getFetch3();