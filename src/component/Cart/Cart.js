import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i<cart.length;i++){
        const product = cart[i];
        total = total + product.price;
    }
    
    const text = Math.round(total / 10);
    

    let shipping = 0;

    if(total > 160){
        shipping = 0;
    }
    else if(total > 40){
        shipping = 15.44;
    }
    else if(total > 20){

        shipping = 11.22;
    }
    
    return (
        <div>
           <h2>Order Summery</h2> 
           <p>Items Ordered:{cart.length}</p>
           <p><small>Shipping Cost:{shipping}</small></p>
          <p><small>Text:{text}</small></p>
           <p>total Price: {Math.round(total +shipping + text )}</p>
        </div>
    );
};

export default cart;