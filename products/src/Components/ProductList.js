import React from "react";
import data from "../Products";
import Product from "./Product";


function ProductList(){

    let arrayData = data.map((product) => <Product productData={product}/>)

    return(
        <div className="List">
           {arrayData}
        </div>
    
    )
    
}
export default ProductList;