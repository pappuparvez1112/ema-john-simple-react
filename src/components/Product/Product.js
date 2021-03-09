import React from 'react';

const Product = (props) => {
    console.log(props);
    
    return (
        <div>
            <h1>this is new</h1>
            <h3>{props.product.name}</h3>
          
           
        </div>
    );
};

export default Product;