import "./productlist.scss";
import React from "react";
import { useLocation} from "react-router-dom";
import { Categories } from "../../conponents/categories/Categories";
import { Topbar } from "../../conponents/topbar/Topbar";
import { Footer } from "../../conponents/footer/Footer";
import { Sort } from "../../conponents/sort/Sort";
import { Products } from "../../conponents/products/Products";
import { setSortBy } from "../../redux/sortRedux";
import { useSelector, useDispatch } from "react-redux";
import { categories } from "../../data";


const sortItems = [
  { name: 'сначала новые', type: 'newest', order: 'desc' },
  { name: 'ценa (выше)', type: 'price up', order: 'desc' },
  { name: 'цена (ниже)', type: 'price down', order: 'asc' },
];


export const ProductList = () => {
  
const sortBy = useSelector((state) => state.sort.sortBy)
const dispatch = useDispatch()
const location = useLocation();
const cat = location.pathname.split("/")[2];



const handleSortBy = (type) => {
  dispatch(setSortBy(type))
}

  return (
    <div className="productListContainer">
      <Topbar />
      <Categories />
      <Sort 
        categories={categories}
        cat={cat}
        items={sortItems}
        handleActiveSortType={handleSortBy}
        activeSortType={sortBy.type}
      />
      <Products cat={cat} activeSortType={sortBy.type}/>
      <Footer />
    </div>
  );
};
