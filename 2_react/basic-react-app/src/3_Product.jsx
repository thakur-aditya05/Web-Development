import "./Product.css"

// passing array to the template 
function Product({title,price=1,features,features2}){
    // sabhi element ek saath kyo print ho rahe hai arrays ke? 
    // jsx me array and object mescene ye hota hai ki ek ek elemnt ko pick kiya jata hai aur usko paragraph me daal dete hai 


    return(
        <>
            <div className="Product">

                <h4> {title}</h4>

                <h5>Product Price:{price} </h5>

                {/* Hi-techdurablefastslow */}
                <p>{features}</p>   

                
                {/* ye indivdual item ko pick krna padta hai keys ka use kr ke */}
                <p>{features2.a}</p>   
                
            </div>
        </>
    );
}

export default Product;




















