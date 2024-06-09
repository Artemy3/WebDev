import React from 'react'
import style from './CartItem.module.css'
import { useDispatch } from 'react-redux';
import { deliteItem } from '../../redux/cartSlice';

const CartItem = ({ id, name, price }) => {
   const dispatch = useDispatch();

   const deleteToCart = () => {
      dispatch(deliteItem({ id }));
   };

   return (
      <div className={style.items}>
         <p>{name}</p>
         <p>{price} руб.</p>
         <button onClick={deleteToCart}>Delete</button>
      </div>
   )
}

export default CartItem;
