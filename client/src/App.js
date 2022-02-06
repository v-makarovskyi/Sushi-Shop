import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Cart } from "./pages/cart/Cart";
import { AdminPage } from "./pages/admin/AdminPage";
import { ProfilePage } from "./pages/profile/ProfilePage";

import "./App.scss";


function App() {

  

  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={ <Login />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="products/:cat" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
