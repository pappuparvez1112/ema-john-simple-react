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
        const toBeAddedKey=product.key;
        const sameCard=card.find(pd=>pd.key===toBeAddedKey);
        let count=1;
        let newCard;
        if(sameCard){
            count=sameCard.quantity+1;
            sameCard.quantity=count;
            const others=card.filter(pd=>pd.key!==toBeAddedKey);
            newCard=[...others,sameCard];
        }
        else{
            product.quantity=1;
            newCard=[...card,product]

        }
       
        setCard(newCard);
        
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