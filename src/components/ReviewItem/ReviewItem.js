import React from 'react';

const ReviewItem = (props) => {
    const {name,price,key,quantity}=props.product;
    
    
    
    
   
  
   
    
 
    return (
        <div>
            
            <h2 className="product-name">{name} </h2>
            <br/>
            <h3>quantity:{quantity}</h3>
            <p>${price}</p>
            <button 
            
            className="productbtn"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
           
        </div>
    );
};

export default ReviewItem;