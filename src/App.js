import { Route, Routes } from 'react-router-dom';
import ProductsList from './features/product';
import Product from './features/product/Product';
import PageLayout from './components/PageLayout';

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<PageLayout/>}>
        <Route index element={<ProductsList/>}/>
        <Route path={'product/:id'} element={<Product/>}/>
      </Route>
    </Routes>
  )
}
