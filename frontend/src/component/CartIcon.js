import React from 'react'
import {useSelector} from 'react-redux'



function CartIcon (){

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };


    return(
        <div className="cart-icon"> 
         <i className="fas fa-shopping-cart"></i>
          <span className="badge badge-warning">{getCartCount()}</span>
         
        </div>
    )
}


// export default connect(mapStateToProps)(CartIcon)

export default CartIcon