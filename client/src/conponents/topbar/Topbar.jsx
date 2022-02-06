import React, { useState, useEffect, useCallback } from "react";
import "./topbar.scss";
import { Person, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { topbarList } from "../../data";
import { TopbarList } from "../topbarlist/TopbarList";
import { Link } from "react-router-dom";
import { getTotals } from "../../redux/cartRedux";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authRedux";

export const Topbar = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("Акции");
  const [showAdmin, setShowAdmin] = useState(false);

  const logOut = useCallback(() => {
    dispatch(logout()).then(() => {
      window.location.reload();
    });
  }, [dispatch]);

  
  useEffect(() => {
    if (currentUser) {
      setShowAdmin(currentUser.isAdmin);
    } else {
      setShowAdmin(false);
    }
    document.addEventListener("logout", logOut);
    return () => document.removeEventListener("logout", logOut);
  }, [currentUser, logOut]);

  
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  return (
    <div className="topbarContainer">
      {showAdmin ? (
        <div className="wrapper">
          <div className="left">
            <Link to="/" className="link">
              <h1>NEWSHOP</h1>
            </Link>
            <ul className="menu">
              {topbarList.map((item) => (
                <TopbarList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </ul>
            <div className="contact">
              <span className="phone">+38 (067) 333 33 33</span>
              <span className="phoneText">заказать звонок</span>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <div className="personIcon">
                <Person />
              </div>
              <div className="auth">
                <Link to="/login" className="link" style={{ color: "crimson" }}>
                  <span onClick={logOut} className="login">
                    Выйти
                  </span>
                </Link>
                <Link to="/admin" className="link" style={{ color: "crimson" }}>
                  <span className="register">Админпанель</span>
                </Link>
              </div>
              <Link to="/cart" className="link">
                <div className="cartIcon">
                  <Badge badgeContent={cart.cartTotalQuantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : currentUser ? (
        <div className="wrapper">
          <div className="left">
            <Link to="/" className="link">
              <h1>NEWSHOP</h1>
            </Link>
            <ul className="menu">
              {topbarList.map((item) => (
                <TopbarList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </ul>
            <div className="contact">
              <span className="phone">+38 (067) 333 33 33</span>
              <span className="phoneText">заказать звонок</span>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <div className="personIcon">
                <Person />
              </div>
              <div className="auth">
                <Link to="/login" className="link" style={{ color: "crimson" }}>
                  <span onClick={logOut} className="login">
                    Выйти
                  </span>
                </Link>
                <Link
                  to="/profile"
                  className="link"
                  style={{ color: "crimson" }}
                >
                  <span className="register">Личный кабинет</span>
                </Link>
              </div>
              <Link to="/cart" className="link">
                <div className="cartIcon">
                  <Badge badgeContent={cart.cartTotalQuantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className="left">
            <Link to="/" className="link">
              <h1>NEWSHOP</h1>
            </Link>
            <ul className="menu">
              {topbarList.map((item) => (
                <TopbarList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </ul>
            <div className="contact">
              <span className="phone">+38 (067) 333 33 33</span>
              <span className="phoneText">заказать звонок</span>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <div className="personIcon">
                <Person />
              </div>
              <div className="auth">
                <Link to="/login" className="link" style={{ color: "crimson" }}>
                  <span className="login">Войти</span>
                </Link>
                <Link
                  to="/register"
                  className="link"
                  style={{ color: "crimson" }}
                >
                  <span className="register">Регистрация</span>
                </Link>
              </div>
              <Link to="/cart" className="link">
                <div className="cartIcon">
                  <Badge badgeContent={cart.cartTotalQuantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
