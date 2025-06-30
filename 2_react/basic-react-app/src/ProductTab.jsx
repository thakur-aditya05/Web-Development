import Product from "./1_Product.jsx"

import "./ProductTab.css" 


function ProductTab(){
    
    return(
        <>   

            <Product title="phone" price="3000"/>
            <Product title="laptop" price={4000}/>
            <Product title="pen" price="5000"/>
        </>
    );

}

export default ProductTab;    