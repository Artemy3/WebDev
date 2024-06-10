import React from 'react'
import style from './Main.module.css'
import main from '../assets/main.jpg'

const Main = () => {
   return (
      <div className={style.main}>
         <p className={style.info}>Ритм крупных мегаполисов — наше вдохновение! Наш магазин представляет топовые модели кроссовок, актуальную обувь, одежду в спортивном стиле и аксессуары. Ассортимент магазина формируется из ключевых новинок известных спортивных производителей и товаров от брендов категории лайфстайл.</p>
         <img src={main} className={style.img} />
      </div>
   )
}

export default Main
