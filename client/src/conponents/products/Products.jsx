import "./products.scss";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { ProductCard } from "../product/Product";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/productsRedux";

export const Products = ({ cat, activeSortType }) => {

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const productsFetch = async () => {
      try {
       
        const res = await axios.get(
          cat 
          ? `http://localhost:5000/api/products?category=${cat}`
          : 'http://localhost:5000/api/products'
        )
        setProducts(res.data)
        dispatch(getProducts(res.data))
      } catch (error) {}
    }
    productsFetch()
  }, [cat, dispatch])


  useEffect(() => {
    if (activeSortType === "newest") {
      setProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (activeSortType === "price up") {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [activeSortType]); 

  return (
    <div className="wrapper">
      <div className="productsContainer">
        {
          products.map((item) => <ProductCard item={item} key={item._id} />)
        } 
      </div>
    </div>
  );
};
