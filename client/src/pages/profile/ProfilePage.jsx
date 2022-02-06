import "./profilepage.scss";
import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../../conponents/categories/Categories";
import { Footer } from "../../conponents/footer/Footer";
import { Topbar } from "../../conponents/topbar/Topbar";


export const ProfilePage = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  return (
    <div className="profile-container">
      <Topbar />
      <Categories />
      <h2>Личный кабинет {currentUser.username}</h2>
      <div className="profile-wrapper">
        <div className="profile-left">
          <ul className="profile-left-items">
            <li className="profile-left-item">Личные данные</li>
            <li className="profile-left-item">Избранные блюда</li>
            <li className="profile-left-item">Последние заказы</li>
            <li className="profile-left-item">Архив заказов</li>
            <li className="profile-left-item">Мои оценки блюд</li>
            <li className="profile-left-item">Выход</li>
          </ul>
        </div>
        <div className="profile-right">
          <h4>Личные данные</h4>
          <div className="profile-right-email">
            <div className="profile-right-email-left">
              <span>Email:</span>
              <span className="email">{currentUser.email}</span>
            </div>
            <p>Текущий уровень персональной скидки: 7%</p>
          </div>
          <form>
            <div className="userName">
              <label htmlFor="name">Имя</label>
              <input type="text" className="name" placeholder="введите имя" />
            </div>
            <button>Сохранить</button>
            <div className="userDate">
              <label htmlFor="date">Дата рождения</label>
              <input type="date" className="date" />
            </div>
          </form>
          <div className="contact">
            <div className="contact-tel">
              <span>ТЕЛЕФОН:</span>
              <span>+38 067 444 44 44</span>
            </div>
            <div className="contact-address">
              <p>АДРЕС:</p>
            </div>
          </div>
          <div className="update">
            <p>
              Изменить пароль для логина <span>test@test.ua</span>
            </p>
            <button>Сменить пароль</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
