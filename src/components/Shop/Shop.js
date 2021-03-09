import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    
    const first10=fakeData.slice(0,10);
    const [product,setProduct]=useState(first10);
    console.log(product);
    return (
        <div className="shopcontainer">
            <div className="productcontainer">
                
                <ul>
                {
                    product.map(pd=> <Product product={pd}></Product> )
                }
                </ul>
                
            </div>
            <div className="cardcontainer">
                <h1>this is card</h1>
            </div>
           
            
        </div>
    );
};

export default Shop;