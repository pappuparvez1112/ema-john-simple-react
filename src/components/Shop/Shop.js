import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Card from '../card/Card';


const Shop = () => {
    
    const first10=fakeData.slice(0,10);
    const [product,setProduct]=useState(first10);
    const [card,setCard]=useState([]);
    
    
    const handleProduct=(product)=>{
        console.log('product added',product);
        const newCard=[...card,product];
        setCard(newCard);
       
    }
    return (
        <div className="shopcontainer">
            <div className="productcontainer">
                
                <ul>
                {
                    product.map(pd=> 
                    <Product
                        handleProduct={handleProduct}
                        product={pd}>

                        </Product> )
                }
                </ul>
                
            </div>
            <div>
                <Card card={card} ></Card>
                
            </div>
           
            
        </div>
    );
};

export default Shop;