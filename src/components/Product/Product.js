import React from 'react';
import './Product.css'
const Product = (props) => {
    
    const {img,name,seller,price,stock}=props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
        
                <p><small>by:{seller}</small></p>
                <p><small>only{stock}left in stock -order quickly</small></p>
                <p>${price}</p>
                <button onClick={()=>props.handleProduct(props.product)} >Buy now</button>
            </div>
          
           
        </div>
    );
};

export default Product;