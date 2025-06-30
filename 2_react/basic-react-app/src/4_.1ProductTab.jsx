import Product from "./1_Product.jsx"

import "./ProductTab.css" 


function ProductTab(){
    
    
    // by rendering all the element of array in html list form 
    let options=[<li>"Hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>,<li>"slow"</li>];
    
    // way 2 by mapping each  and every element of array with html list form 
    let options3=["Hi-tech","durable","fast","slow"];
    


    let options2 ={a:"aditya",b:"singh",c:"thkaur"};
    
    return(
        <>   

            <Product title="phone" price="3000" features3={options3}  features={options} features2={options2}/>
            {/* features={["Hi-tech","durable","fast","slow"]} features2={{a:"aditya",b:"singh",c:"thkaur"}} */}
            <Product title="laptop" price={4000}/>
            <Product title="pen" price="5000"/>
        </>
    );

}

export default ProductTab; 