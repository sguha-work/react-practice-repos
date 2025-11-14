import React, { useEffect } from 'react'

function ProductDetailsComponent(props) {
    const productDetails = props.productDetails;
    useEffect(()=>()=>{
        // this function will be called when the component get destroyed
        console.log("product details component destroyed");
    })
    return (
        <div>
            <h2>{productDetails.title}</h2>
            <img src={productDetails.image}></img>
            <b>{productDetails.type}</b>
            <b>{productDetails.price}</b>
            <p>{productDetails.description}</p>
        </div>
    )
}

export default ProductDetailsComponent