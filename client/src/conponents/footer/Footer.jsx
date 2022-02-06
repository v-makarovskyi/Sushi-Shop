import "./footer.scss";
import {
  AlternateEmail,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

import React from "react";

export const Footer = () => {
  return (
    <div className="footerContainer">
      
        <div className="left">
          <div className="leftInfo">
            <h1>NEWSHOP</h1>
            <p className="desc">
              © «NEWSHOP» — Доставка суши и хорошего настроения.
            </p>
          </div>
          <ul className="linksList">
            <li className="linksListItem">Контакты</li>
            <li className="linksListItem">Акции</li>
            <li className="linksListItem">Cтандарты</li>
            <li className="linksListItem">Отзывы</li>
            <li className="linksListItem">Вакансии</li>
            <li className="linksListItem">Заказ суши</li>
            <li className="linksListItem">Суши на дом</li>
            <li className="linksListItem">Доставка суши</li>
            <li className="linksListItem">История суши</li>
            <li className="linksListItem">Как есть суши?</li>
          </ul>
        </div>
        <div className="center">
          <p className="centerText">Доставка NEWSHOP у вас на ладони</p>
          <div className="imgContainer">
            <img
              src="https://www.sushi-profi.ru/static_root/css/images/appy.49e28e21a028.png"
              alt="#"
            />
            <img
              src="https://www.sushi-profi.ru/static_root/css/images/google.75b3306b10e2.png"
              alt="#"
            />
          </div>
          <div className="centerBottom">
            <p>Принимаем к оплате</p>
            <img
              src="https://www.sushi-profi.ru/static_root/css/images/payments-wide.29cbfee7ce69.png"
              alt="#"
            />
          </div>
        </div>
        <div className="right">
          <div className="rightInfo">
            <div className="address">
              <Room style={{ marginRight: "10px" }} />
              Киев, ул. Костельная, 33
            </div>
            <div className="tel">
              <Phone style={{ marginRight: "10px" }} />
              +38 067 333 33 33
            </div>
            <div className="email">
              <AlternateEmail style={{ marginRight: "10px" }} />
              info@newshop.ua
            </div>
          </div>
          <div className="socialContainer">
            <div className="socialIcon fb">
              <Facebook />
            </div>
            <div className="socialIcon tw">
              <Twitter />
            </div>
            <div className="socialIcon insta">
              <Instagram />
            </div>
            <div className="socialIcon pin">
              <Pinterest />
            </div>
          </div>
        </div>
      
    </div>
  );
};
