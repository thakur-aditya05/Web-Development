// await : waiting for someone 
// await jis bhi function ke smne likh diya to : apne ass pass ke saare "async" function ko pause kr dega, unhe intzaar krna padega jb tk await wale function ka promise completely resolve nahi ho jata 

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();  // call back execute hoga resolve ke naam pe 
        })
    })
}
async function demo(){
    getNum();
    getNum();
    getNum();
    getNum();
    getNum();

    // calling all the getNum together sinse there will be one sec delay but all will go for one sec dealy and affter 1sec all are executed 
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    //  next function will be called when 1st function stop 

}


async function changeColor(color,delay){  // this return manual promises 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`${color} changes after ${delay}`);
            resolve("${color} changes after ${delay}: this is meassage which will be return to all await keywords ");
        },delay);
    })
}
async function demo(){  // will return promises 
    let a= await  changeColor("red",1000);
    let b=await  changeColor("green",1000);
    let c=await  changeColor("violet",1000);
    let d=await  changeColor("green",1000);
    let e=await  changeColor("yellow",1000);
    //  next function will be called when 1st function stop 
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    return "this function retun promises and in promises it will execute next then method and next then method which print this message  ";
}
demo().then((result)=>{
    console.log(result);
});
// If you're unsure whether a function returns a Promise, just console.log(greet()) — if it prints Promise {}, then you're good to go!




try{
     await  changeColor("red",1000);
    await  changeColor("green",1000);
    await  changeColor("violet",1000);
    await  changeColor("green",1000);
    await  changeColor("yellow",1000);
}catch(e){
    console.log("error caught");
    console.log(e);
}

console.log("baki ka code execute goga ");
console.log("issi tarah hi async and awit error ko handle krte hai");