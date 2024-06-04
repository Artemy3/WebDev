import axios from 'axios';
import RenderCard from './../RenderCard/RenderCard';
import React, { useEffect, useState } from 'react'

function Products() {
   // let products = [
   //    {
   //       id: 1,
   //       image: 'https://sneakernews.com/wp-content/uploads/2018/05/nike-air-force-1-100-aq3621-111-2.jpg',
   //       name: 'Nike Air Force 1',
   //       price: '6000',
   //       description: 'Nike Air Force 1 — самые важные в истории кроссовки, которым уже более 35 лет, а их дизайн не менялся уже 30 с лишним лет. После появления в 1982 году они спровоцировали настоящую техническую революцию в 80-х, культурную революцию в 90-х и породили понятие «ретро»-моделей. В 2000-х они получили всемирное признание, оказавшись в эпицентре модных трендов. После 2000 перевыпусков, и являясь одной из самых продаваемых моделей в истории, Nike Air Force 1, без сомнения, заслуживают звания культовых.',
   //    },
   //    {
   //       id: 2,
   //       image: 'https://pbs.twimg.com/media/ETanniXUEAEt9DW.jpg',
   //       name: 'Nike Air Max 90',
   //       price: '6800',
   //       description: 'Nike Air Max 90 — это третья модель линии Air Max, разработанная в 1990 году и с тех пор ставшая классикой. Изначально предназначенные для бега, со временем Air Max 90 заняли свое место в гардеробе любителей спортивного стиля.',
   //    },
   //    {
   //       id: 3,
   //       image: 'https://myreact.ru/wp-content/uploads/2023/09/6c8a896642c86f0f436d698abe012f43.jpg',
   //       name: 'Nike Air Max Plus',
   //       price: '7200',
   //       description: 'Демисезонные кроссовки Nike Air Max Plus 3 – правильный выбор, если вам нужна обувь для активного отдыха или спортивных тренировок. Стильный и эффектный дизайн кроссовок не оставит равнодушным.',
   //    },
   //    {
   //       id: 4,
   //       image: 'https://cdn1.ozone.ru/s3/multimedia-1/6688124425.jpg',
   //       name: 'Adidas Niteball',
   //       price: '5800',
   //       description: 'Особенностью кроссовок Adidas Niteball является их уникальный дизайн и цвет. Верх кроссовок выполнен из комбинации текстиля и замши, что делает их не только стильными, но и комфортными для ежедневного использования.',
   //    },
   //    {
   //       id: 5,
   //       image: 'https://i.pinimg.com/originals/09/12/5c/09125c939e0a7889ddf1668cb723e1db.jpg',
   //       name: 'Nike Air Jordan 4',
   //       price: '7600',
   //       description: 'Air Jordan 4 Retro сохраняют культовый статус с момента своего дебюта в 1989 году. Эта модель связана с одним из самых незабываемых моментов в карьере знаменитого баскетболиста Майкла Джордана, когда он принес решающее очко своей команде в последние три секунды матча. Его прыжок в черных Air Jordan 4 навсегда остался в истории как «The Shot».',
   //    },
   //    {
   //       id: 6,
   //       image: 'https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1573513319567-HPO2D2N04HU34MIUKFML/image-asset.jpeg',
   //       name: 'Adidas Campus',
   //       price: '6100',
   //       description: 'Легендарные кроссовки adidas Campus появились в 1978 году и позиционировались как обувь только для тренировок в закрытом помещении на искусственном типе покрытии. Оказавшись в эпицентре развития хип-хоп культуры 80-х и 90-х, они быстро перешли с баскетбольных площадок на улицы, проникнув во многие субкультуры, включая скейтбординг. Сегодня их простой и аутентичный силуэт продолжает отражать дух того времени.',
   //    },
   // ];

   const [products, setProducts] = useState([]);


   useEffect(() => {
      axios.get('https://662a6f4167df268010a3ebd4.mockapi.io/items').then(res => {
         setProducts(res.data);
      });
   }, [])



   return (
      <div className='items'>
         {products.map((product) => (
            <RenderCard key={product.id} {...product} />
         ))}
      </div>
   )
}

export default Products
