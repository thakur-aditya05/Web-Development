import "./Product.css"

// passing array to the template 
// in the form of list 
// 

// way 1 by rendering all the element of array in html list form 



// way 2 by mapping each  and every element of array with html list form 
function Product({title,price=1,features,features2,features3}){

    const list= features3.map((feature3)=><li>{feature3}</li>);

    return(
        <>
            <div className="Product">

                <h4> {title}</h4>

                <h5>Product Price:{price} </h5>


                {/* yehe pe jb individual item pick kiya jayega to wo list form hoga jiske karan automatic list printing*/}
                {/* Hi-techdurablefastslow */}
                <p>{features}</p>   

                
                {/* ye indivdual item ko pick krna padta hai keys ka use kr ke */}
                <p>{features2.a}</p>   
                
                {/* yehe pe jb individual item pick kiya jayega to wo list form hoga jiske karan automatic list printing*/}
                <p>{list}</p>  

    
            </div>
        </>
    );
}

export default Product;




















