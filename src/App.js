import Header from './components/Header/Header';
import './App.css'
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <div >
        <Header />
      </div>
      <div className='renderCard'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
