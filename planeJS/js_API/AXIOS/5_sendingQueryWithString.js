// https://github.com/Hipo/university-domains-list-api 

let url = "http://universities.hipolabs.com/search?name=";

let country = "nepal";

async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        console.log(res);
        console.log(res.data);
        return res.data;
        
    }catch(e){
        console.log("error msg - ", e);
        return [];
    }
}


{/* 
cdn for axios 

<input placeholder="enter country"  >
<button>Search </button> 
<ul id="list"></ul>

script 
*/}

btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value; //bring input givrn to the button 
    console.log(country);       // print the input button value 
    let colArr= await getColleges(country); // get  the country college data name 
    console.log(colArr);  // 
    show(colArr);   
});

function show(colArr){
    let list = document.querySelector("list");

    list.innerText="";

    for (col of colArr){
        console.log(col.name);;

        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li); 
    }
}
