import Product from "./1_Product.jsx"

import "./ProductTab.css" 


function ProductTab(){
    let options=["Hi-tech","durable","fast","slow"];
    let options2 ={a:"aditya",b:"singh",c:"thkaur"};
    return(
        <>   

            <Product title="phone" price="3000" features={options} features2={options2}/>
            {/* features={["Hi-tech","durable","fast","slow"]} features2={{a:"aditya",b:"singh",c:"thkaur"}} */}
            <Product title="laptop" price={4000}/>
            <Product title="pen" price="5000"/>
        </>
    );

}

export default ProductTab; 