function Title(){
    let a="aditya";
    return (
        <>
         <h1> i am title </h1>
         {/* treated as js  */}
            <h2>2*2={2*2}</h2> 
            <h2>{a.toUpperCase()}</h2> 
        </>
    );
}
export default Title; // iss case of exporting me we can use any custom name after exporting like Title component 

export {Title};  // yaha pe export krne ke baad sirf yahi naam (Title) use kr skte hai 