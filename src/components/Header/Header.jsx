import React from "react";
import style from './Header.module.css'
import { Link } from "react-router-dom";


const Header = () => {
   return <div className={style.header}>
      <div>
         <button>Вход</button>
      </div>
      <div>
         <div className={style.btn_right}>
            <Link className={style.link} to="/">Главная</Link>
            <Link className={style.link} to="/products">Товары</Link>
            <Link className={style.link} to="/cart">Корзина</Link>
         </div>
         <div>
            <p>Товаров на сумму:</p>
         </div>
      </div>
   </div>
}

export default Header