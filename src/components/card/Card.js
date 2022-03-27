import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
   const card = props.card;
   const shipping=card.reduce((shipping,product)=>product.shipping,0)
   
   const star=card.reduce((star,product)=>product.star,0)
   const totalPrice=card.reduce((totalPrice,product)=>product.price*product.quantity,0)
   const total=card.reduce((total,product)=>totalPrice+star+shipping,0)
   console.log(card);
   
    return (
        <div className="cartcontainer">
            <h1>order summary</h1>
            <p>product-ordered:{card.length}</p>
            <p>shipping cost:{shipping}</p>
            <p>tax+vat:{star}</p>
            <h3>price:{totalPrice}</h3>
            <h2>Total:{total}</h2>
            <Link to="/review">
            <button className="productbtn">Review</button>


            </Link>
            
        </div>
    );
};

export default Card;