import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Card from '../card/Card';
import { addToDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
    
    const first10=fakeData.slice(0,10);
    const [product]=useState(first10);
    const [card,setCard]=useState([]);
    
    
    const handleProduct=(product)=>{
        console.log(product);
        const newCard=[...card,product];
        setCard(newCard);
        const sameCard=newCard.filter(pd=>pd.key===product.key);
        const count=sameCard.length;
        addToDatabaseCart(product.key,count);
       
    }
    return (
        <div className="shopcontainer">
            <div className="productcontainer">
                
                
                {
                    product.map(pd=> 
                    <Product
                        key={pd.key}
                        showAddToCard={true}
                        handleProduct={handleProduct}
                        product={pd}>

                        </Product> )
                }
                
                
            </div>
            <div>
                <Card card={card} ></Card>
                
            </div>
           
            
        </div>
    );
};

export default Shop;