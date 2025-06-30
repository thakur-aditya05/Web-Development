import "./Product.css"

// props ek  object hai jiske under sabhi variable key value pair form kr dete hai  
function Product(props){  


    console.log(props); // will print object 
    console.log(props.title); 



    return(
        <>
            <div className="Product">
                <h3>Product Title  {props.title} </h3>

                <h4> {props.title}</h4>
                <h5>Product Price:{props.price} </h5>
            </div>
        </>
    );
}

export default Product;




















