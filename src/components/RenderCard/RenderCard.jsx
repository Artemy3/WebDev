import { useState } from 'react';
import style from './RenderCard.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const RenderCard = ({ id, image, name, price, description }) => {
   const [isShow, setIsShow] = useState(false);
   const dispatch = useDispatch();

   const addToCart = () => {
      dispatch(addItem({ id, image, name, price, description }));
   };

   return (
      <div className={style.card}>
         <img className={style.image} src={image} />
         <p>{name}</p>
         <p>{price} руб.</p>
         <div>
            <button className={style.btnBuy} onClick={addToCart}>Купить</button>
         </div>
         <div>
            <button className={style.btnDescription} onClick={() => { setIsShow(!isShow) }}>{isShow ? <p>Скрыть описание</p> : <p>Показать описание</p>}</button>
            {isShow && <p>{description}</p>}
         </div>
      </div>
   )
};

export default RenderCard;
