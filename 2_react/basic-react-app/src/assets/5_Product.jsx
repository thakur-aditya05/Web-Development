import "./Product.css"

// conditional 
// way 1 
// function Product({title,price=1}){

//     if(price>30000){
//         return(
//         <>
//             <div className="Product">

//                 <h4> {title}</h4>

//                 <h5>Product Price:{price} </h5>
//                 <h5>discount of 5 %</h5>

//             </div>
//         </>
//     );
//     }else{
//         return(
//         <>
//             <div className="Product">

//                 <h4> {title}</h4>

//                 <h5>Product Price:{price} </h5>

//             </div>
//         </>
//     );
//     }

    
// }





// conditional 
// way 2   (bekar tarika ye bhi hai but sochan kkyo hai ? hw)
// function Product({title,price=1}){

//         let isDiscount=price>3000?"Discount of 5% ":"";

//         return(
//         <>
//             <div className="Product">

//                 <h4> {title}</h4>

//                 <h5>Product Price:{price} </h5>
//                 <h5>{isDiscount}</h5>

//             </div>
//         </>
//     );


    
// }






// conditional 
// way 3
function Product({title,price=1}){



        return(
        <>
            <div className="Product">

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




















