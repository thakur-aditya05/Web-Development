import "./Product.css"

import Price from "./Price";

function Product({title,idx}){

    let oldPrices=["1000","2000","3000"];
    let newPrices=["5000","6000","7000"];

    let description=[
        ["In JavaScript, a  ","can be created by"],
        ["Each inner array  ","hahahahaha"],
        ["okokokokok ","donedone"],
        ["finefinefine ","thikthik"],
    ];
    
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );


}
export default Product;
 