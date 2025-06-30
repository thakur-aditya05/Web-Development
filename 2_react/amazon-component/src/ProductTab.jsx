

import Product from "./Product.jsx";

let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
};

 function ProductTab(){
    return(
        <div style={styles}>
            
            <Product title="laptop" idx={0}/>
            <Product title="mouse" idx={1}/>
            <Product title="keyboard" idx={2}/>
            <Product title="laptop" idx={0}/>
            <Product title="mouse" idx={1}/>
            <Product title="keyboard" idx={2}/>

        </div>
    );
}
export  default  ProductTab;