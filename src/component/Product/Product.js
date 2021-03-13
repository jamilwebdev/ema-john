import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props.product.name);
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in-Order Soon</small></p>
                <button class="main-buttton"
                    onClick={() =>props.handelAddProduct(props.product)}
                >
                <FontAwesomeIcon icon={faShoppingCart} />
                     add to cart
                </button>
            </div>
          
         </div>
         
           
    );
};

export default Product;