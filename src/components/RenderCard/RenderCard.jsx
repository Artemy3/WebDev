import { useState } from 'react';
import style from './RenderCard.module.css';

const RenderCard = ({ image, name, price, description }) => {
   const [isShow, setIsShow] = useState(false);

   return (
      <div className={style.card}>
         <img className={style.image} src={image} />
         <p>{name}</p>
         <p>{price} руб.</p>
         <div>
            <button className={style.btnDescription} onClick={() => { setIsShow(!isShow) }}>{isShow ? <p>Скрыть описание</p> : <p>Показать описание</p>}</button>
            {isShow && <p>{description}</p>}
         </div>
      </div>
   )
};

export default RenderCard;
