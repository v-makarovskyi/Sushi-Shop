import "./product.scss";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { addToCart } from "../../redux/cartRedux";

export const ProductCard = ({ item }) => {

  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className="cardWrapper">
      <div className="cardContainer">
        <Link to={`/product/${item._id}`}>
          <div className="imageContainer">
            <img src={item.img} alt="#" />
          </div>
        </Link>
        <h2>{item.title}</h2>
        <div className="cardDesc">{item.desc}</div>
        <div className="cardBuy">
          <p className="cardPrice">
            <span>{item.price}</span> грн
          </p>
          <button className="cardBtn" onClick={() => handleAddToCart(item)}>
            <ShoppingCartOutlined />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};
