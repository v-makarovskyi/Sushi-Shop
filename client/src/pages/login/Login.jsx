import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authRedux";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { Topbar } from "../../conponents/topbar/Topbar";
import { Footer } from "../../conponents/footer/Footer";

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(login({ username, password })).then(() => {
        navigate("/");
        window.location.reload();
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="loginContainer">
      <Topbar />

      <div className="content">
        <p className="title">Вход на сайт</p>
        <form id="form" onSubmit={handleLogin}>
          <input
            placeholder="Имя пользователя"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="cardBtn">
            ВОЙТИ
          </button>
          {error && <span>Что-то пошло не так... Попробуйте еще раз.</span>}
          <span>Забыли пароль?</span>
          <span>Создать новый аккаунт</span>
        </form>
      </div>
      <Footer />
    </div>
  );
};
