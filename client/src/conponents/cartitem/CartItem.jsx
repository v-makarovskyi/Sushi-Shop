import React from "react";
import { Add, Remove, ClearOutlined } from "@material-ui/icons";
import "./cartitem.scss";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, descreaseCart, addToCart } from '../../redux/cartRedux'

export const CartItem = () => {
  const dispatch = useDispatch()
  const {cartItems } = useSelector((state) => state.cart)

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleDescreaseCart = (item) => {
    dispatch(descreaseCart(item))
  }

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div>
      {cartItems &&
      cartItems.map((cartItem) => (
        <div className="cart-product" key={cartItem._id} >
          <div className="cart-product-left">
            <div className="cart-product-title">
              <div className="img">
                <img src={cartItem.img} alt="#" />
              </div>
              <div className="txt">
                <h3>{cartItem.title}</h3>
                <span>{cartItem.desc}</span>
              </div>
            </div>
          </div>
          <div className="cart-product-right">
            <div className="cart-product-price">
              {cartItem.price} <span>грн</span>
            </div>
            <div className="cart-product-amount">
              <Add style={{ cursor: "pointer" }} onClick={() => handleIncreaseCart(cartItem)}/>
              <div className="cart-amount">{cartItem.cartQuantity}</div>
              <Remove style={{ cursor: "pointer" }} onClick={() => handleDescreaseCart(cartItem)}/>
            </div>
            <div className="cart-product-fullprice">
              {cartItem.price * cartItem.cartQuantity} <span>грн</span>
            </div>
            <div className="delete-product" onClick={() => handleRemoveFromCart(cartItem)}>
              <ClearOutlined />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
