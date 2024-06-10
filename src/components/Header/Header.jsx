import React, { useEffect } from "react";
import style from './Header.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../assets/logo.jpg';
const Header = () => {
   const { items, totalPrice } = useSelector((state) => state.cart);

   useEffect(() => {
      localStorage.setItem('cartProducts', JSON.stringify(items))
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
   }, [items]);


   return <div className={style.header}>
      <div>
         <img src={logo} className={style.logo} />
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

export default Header;