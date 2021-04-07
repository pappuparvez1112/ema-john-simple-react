import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [card,setCard]=useState([]);
    const removeProduct=(productKey) => {
        console.log("remove clicked",productKey)
        const newCard=card.filter(pd=>pd.key!==productKey);
        setCard(newCard);
        removeFromDatabaseCart(productKey);
    }
    
    
   
    useEffect(()=>{
        const saveCard=getDatabaseCart();
        const productKeys=Object.keys(saveCard);
        const cardProduct=productKeys.map(key =>{
            const product=fakeData.find(pd=> pd.key===key);
            product.quantity=saveCard[key];
            return product;

        });
    
        setCard(cardProduct);
        
        
    },[])
    return (
        <div className="shopcontainer">
            
            <div className="productcontainer">
            {
                card.map(pd => <ReviewItem
                    removeProduct={removeProduct}
                    product={pd}></ReviewItem>)
            }

            </div>
            <div>
                <Card card={card}></Card>
            </div>
            
            
        </div>
    );
};

export default Review;