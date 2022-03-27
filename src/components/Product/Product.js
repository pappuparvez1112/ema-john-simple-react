import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {

    
    const {img,name,seller,price,stock,key}=props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"> <Link to={"/product/"+ key}>{name}></Link> </h4>
        
                <p><small>by:{seller}</small></p>
                <p><small>only{stock}left in stock -order quickly</small></p>
                <p>${price}</p>
                {
                    props.showAddToCard &&
                    <button  className="productbtn" onClick={()=>props.handleProduct(props.product)} >Buy now</button>
                }
            </div>
          
           
        </div>
    );
};

export default Product;