import React, { useEffect, useState } from "react";
import "./product.scss";
import { Topbar } from "../../conponents/topbar/Topbar";
import { Categories } from "../../conponents/categories/Categories";
import { Footer } from "../../conponents/footer/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartRedux";

export const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  return (
    <div className="container">
      <Topbar />
      <Categories />
      <div className="wrapper">
        <div className="imgContainer">
          <img src={product.img} alt="#" />
        </div>
        <div className="right">
          <div className="rightDesc">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
          </div>
          <div className="rightPrice">
            <div className="price">
              Всего <span>{product.price}</span> грн
            </div>
            <button
              className="cardBtn"
              onClick={() => handleAddToCart(product)}
            >
              В корзину
            </button>
            <span className="delivery">Доставка бесплатно</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
