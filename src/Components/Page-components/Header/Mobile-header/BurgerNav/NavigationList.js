import React from "react";



 const NavigationList = ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>О нас</li>
      <li onClick={close}>Услуги</li>
      <li onClick={close}>Прайс</li>
      <li onClick={close}>Новости</li>
      <li onClick={close}>Контакты</li>
    </ul>
  </div>
);

export default NavigationList