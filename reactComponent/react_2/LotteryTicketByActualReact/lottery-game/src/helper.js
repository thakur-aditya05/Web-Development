// jitna variable bhejenge utne hi randome numbers generate kr ke dedega in the form of array 
function genTicket(n){
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);

    }
    return arr;
}

// mistaken code 
    // function sum(arr){
    //     return arr.reduce((sum,curr) => (sum+curr, 0));
    // }
        
//correct code
function sum(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0);  // Accumulate sum and start with 0
}



export {genTicket,sum};
