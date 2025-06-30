// lets color change krna hai ek ek seconds ke baad 
h1=document.querySelector("h1");

setTimeout(()=>{
    h1.style.color="red";
},1000);
setTimeout(()=>{
    h1.style.color="green";
},2000);
setTimeout(()=>{
    h1.style.color="orange";
},3000);


// but ye accha trika nahi hai issme redandncy hai kaam krne ka issme calculate krna pd rah hai time ko 
// --------------------------------------------------------



// --------------------------------------------------------
// without redundancy 
function changeColor(color){
    h1.style.color=color;
}

setTimeout(changeColor("red"),1000);
setTimeout(changeColor("green"),2000);
setTimeout(changeColor("orange"),3000);

// more better way 
function changeColor(color,delay){
    setTimeout(()=>{
        h1.style.color=color;
    },delay);
}

// hamara motive ye hai ki ek kaam ho jaye pura bhale hi uske liye rukna pade but uske baad hi dusara kaam ho 
// yaha pe bhi calculate krana pad raha hai taki saath me krwaya ja sake kaam 
changeColor("red",1000);
changeColor("green",2000);
changeColor("orange",3000);
// --------------------------------------------------------




// -------------------------------------------------------
// ab actual probleum start hui ki call stack create hota ja raha hai 
// more better way 
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange)nextColorChange();
    },delay);
}
// flow will be like ki wait for 1 second give red color and again wait for 1 sec give orange color
changeColor("red",1000,()=>{
    changeColor("orange",1000);
})



// ye call back hell hai 
// maan lo 10 kaam krwane hai 
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});



// maan lo 10 kaam krwane hai 
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
});

// data bases ke under , api calls ke under inn situatiions me hame nahi pata hota hai ki kitn time lagne wala hai 
// to issme hame aise krna hota hai ki ek kaam khatam ho jaye uske baad dusara ho aise callbacks likhne padte hai 
// callBack Nesting 

// if we want to achive  asynchorous behaviour through call stacks i.e we are making call back nesting called call back hell 






// solve by promise and asynch and await 