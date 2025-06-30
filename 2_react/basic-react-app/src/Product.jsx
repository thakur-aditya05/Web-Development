import "./Product.css"

// Dynamic component styling 
// way 1 (explore by ur self it was just like we have added style in html through js logic that is by adding and removing class)

// way 2 as shown below 
function Product({title,price=1}){

    let styles ={backgroundColor:price>3003?"green":""};

        return(
        <>
            <div className="Product" style={styles}>

                <h4> {title}</h4>

                <h5>Product Price:{price} </h5>

                {/* ye best hai tarika hai  */}
                {price>3000?<p>"Discount of 5% "</p>:null}

                {/* ye best hai tarika hai  */}
                {price>3000 && <p>"Discount of 5% "</p>}
            </div>
        </>
    );


    
}





export default Product;




















