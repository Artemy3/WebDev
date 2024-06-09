import React from 'react'
import CartItem from '../CartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/cartSlice';

const Cart = () => {
   const { items, totalPrice } = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   return (
      <div>
         <h1>Корзина</h1>
         {items.map((el) => (
            <CartItem key={el.id} {...el} />
         ))}
         <button onClick={() => { dispatch(clearItems()); }}>Отчистить корзину</button>
      </div>
   )
}

export default Cart;
