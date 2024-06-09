import { useState } from 'react';
import style from './RenderCard.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const RenderCard = ({ id, image, name, price, description }) => {
   const [isShow, setIsShow] = useState(false);
   const [isBuy, setIsBuy] = useState(true);
   const dispatch = useDispatch();

   const addToCart = () => {
      dispatch(addItem({ id, image, name, price, description }));
      setIsBuy(!isBuy)
   };

   return (
      <div className={style.card}>
         <img className={style.image} src={image} />
         <p>{name}</p>
         <p>{price} руб.</p>
         <div>
            <button className={style.btnBuy} onClick={addToCart} disabled={!isBuy ? true : false}>{isBuy ? <p>Купить</p> : <p className={style.productToCart}>Товар в корзине</p>}</button>
         </div>
         <div>
            <button className={style.btnDescription} onClick={() => { setIsShow(!isShow) }}>{isShow ? <p>Скрыть описание</p> : <p>Показать описание</p>}</button>
            {isShow && <p>{description}</p>}
         </div>
      </div>
   )
};

export default RenderCard;
