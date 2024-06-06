import React from "react";
import style from './Header.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
   const { items, totalPrice } = useSelector((state) => state.cart);

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
            <p>Колличество товаров в корзине:<span> {items.length}</span></p>
            <p>Сумма:<span> {totalPrice}</span> руб.</p>
         </div>
      </div>
   </div>
}

export default Header