import Product from "./1_Product.jsx"

import "./ProductTab.css" 


function ProductTab(){
    return(
        <>   

            {/* varble phone */}
            <Product title="phone" price="3000"/>

            {/* number should be pass with curly braces  */}
            <Product title="laptop" price={4000}/>
            
            {/* treate them as function as argument and can be given as default values */}
            {/* all of them can be considered  */}
            {/* different a */}
            <Product title="pen" price="5000"/>
        </>
    );

}

export default ProductTab; 