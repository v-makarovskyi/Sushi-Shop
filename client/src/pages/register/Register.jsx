import React, { useState } from "react";
import "./register.scss";
import { Topbar } from "../../conponents/topbar/Topbar";
import { Footer } from "../../conponents/footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/authRedux";


export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      dispatch(register({ username, email, password }))
    .then(() => {
      navigate('/login')
   
      document.getElementById("form").reset();
    })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerContainer">
      <Topbar />
      <div className="content">
        <p className="title">Регистрация</p>
        <p className="desc">
          Если вы планируете совершать покупки на нашем сайте, предлагаем вам
          зарегистрироваться. Это в дальнейшем упростит процесс оформления
          заказа.
        </p>
        <form id="form" onSubmit={handleRegister}>
          <input placeholder="Имя" />
          <input placeholder="Фамилия" />
          <input
            placeholder="Имя пользователя"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input placeholder="Повторите пароль" />
          <button className="cardBtn" type="submit">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
