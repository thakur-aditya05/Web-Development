

// this is basic function made on to count the variable 
export default function Counter(){
    
    // just 
    let count = 0;

    function inCount(){
        count+=1;
        console.log(count);
    }

    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )

}

// normal behaviour of the components
// componets is just the function and once it render uske baad if componnt me kuch changes hote hai to UI rerender nahi hota hai 
// normal variables, props (immutable ) --> in all thsese cases once components rendered then affter it any changes in UI will not re-rerender the components  

// statefull components 
// onse components render but affter that any changes in states varaibles will leads to re render the components and hence UI will again re render 
// but only statefull Components are re-rendered 





// useState--->gives two values 
// a) its return the function which update state variable and re-render the page for the ui 
// b) it also return the initial value of the state  





