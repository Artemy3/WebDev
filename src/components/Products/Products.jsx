import axios from 'axios';
import RenderCard from './../RenderCard/RenderCard';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';

function Products() {
   // const [products, setProducts] = useState([]);
   const products = useSelector((state) => state.products.products);

   const dispatch = useDispatch();


   const fetchItems = async () => {
      const res = await axios.get('https://662a6f4167df268010a3ebd4.mockapi.io/items');
      dispatch(setProducts(res.data))
   };

   useEffect(() => {
      fetchItems()
   }, []);



   return (
      <div className='items'>
         {products.map((product) => (
            <RenderCard key={product.id} {...product} />
         ))}
      </div>
   )
}

export default Products
