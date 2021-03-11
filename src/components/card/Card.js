import React from 'react';

const Card = (props) => {
   const card = props.card;
   console.log(card);
   
    return (
        <div>
            <h1>order summary</h1>
            <p>sum:{card.lenght}</p>
        </div>
    );
};

export default Card;