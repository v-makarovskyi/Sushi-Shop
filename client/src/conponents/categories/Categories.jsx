import "./categories.scss";
import { categories } from "../../data";
import { CatItem } from "../catItem/CatItem";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="wrapper">
        {categories.map((item) => (
          <Link
            to={`/products/${item.cat}`}
            className="link"
            style={{ color: "#5e5e5e" }}
            key={item.id}
          >
            <CatItem item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
