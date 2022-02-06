import React, { useEffect } from "react";
import "./cart.scss";
import { Topbar } from "../../conponents/topbar/Topbar";
import { CartItem } from "../../conponents/cartitem/CartItem";
import { Footer } from "../../conponents/footer/Footer";
import { clearCart, getTotals } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispath = useDispatch();

  const handleClearCart = () => {
    dispath(clearCart());
  };

  useEffect(() => {
    dispath(getTotals());
  }, [dispath, cart]);

  return (
    <>
      <Topbar />
      <div className="cartContainer">
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Корзина еще пуста :(</p>
            <div className="start-shopping">
              <div className="cart-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="currentColor"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2>Мой прекрасный обед</h2>
            <div className="cartWrapper">
              <div className="cartBlock">
                <div className="cart-top">
                  <div className="cart-top-left">
                    <div className="cart-item-title">
                      <p>Название</p>
                    </div>
                  </div>
                  <div className="cart-top-right">
                    <div className="cart-item-price">
                      <p>Цена</p>
                    </div>
                    <div className="cart-item-quantity">
                      <p>Количество</p>
                    </div>
                    <div className="cart-item-fullprice">
                      <p>Сумма</p>
                    </div>
                  </div>
                </div>
                <CartItem />
              </div>
              <div className="cart-summary">
                <button className="cartBtn" onClick={() => handleClearCart()}>
                  Очистить корзину
                </button>
                <div className="cart-summary-right">
                  <div className="cart-summary-item">
                    <p className="cart-symmary-text">Сумма заказа:</p>
                    <p className="summary-item-price">
                      {cart.cartTotalAmount} грн
                    </p>
                  </div>
                  <div className="cart-summary-item">
                    <p className="cart-symmary-text">Скидка (5%):</p>
                    <p className="summary-item-price">
                      {((cart.cartTotalAmount / 100) * 5).toFixed(1)} грн
                    </p>
                  </div>
                  <div className="cart-summary-item">
                    <p className="cart-symmary-text sum">Итого к оплате:</p>
                    <p className="summary-item-price">
                      {(
                        cart.cartTotalAmount -
                        (cart.cartTotalAmount / 100) * 5
                      ).toFixed(1)}{" "}
                      грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
};
