import "./Product.css"


// object ki same honi chahiye  
// destructuring 
// by default price is 1 
function Product({title,price=1}){



    return(
        <>
            <div className="Product">

                <h4> {title}</h4>
                <h5>Product Price:{price} </h5>
            </div>
        </>
    );
}

export default Product;




















