import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product-area" >
            <div>
               <img src={img} alt="" />
            </div>
            <div className="product-name-area">
              <h2 className="product-name">{name}</h2>
              <p><small>by : {seller}</small></p>
              <p>${price}</p>
              <p><small>only {stock} left in stock - order soon</small></p>
              <button onClick={()=>props.handleAddProduct(props.product)} className="add-cart"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;