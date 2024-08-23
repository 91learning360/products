import './App.css'
import ProductPage from './components/Products/ProductPage/ProductPage';
import Product from './components/Products/Products'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/product/:id' element={<ProductPage />}  />

      </Routes>

    </>
  )
}

export default App
