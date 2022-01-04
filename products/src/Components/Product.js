import React from 'react'

function Product({productData}) {

    return (
        <div className="Product">
          <p>{productData.name}</p>
          <p>{productData.price}</p>
          <img src={productData.image}/>
            
        </div>
    )
}

export default Product
