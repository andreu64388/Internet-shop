import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './componets/Error';
import Footer from './componets/Footer';
import Loading from './componets/Loading';
import Navbar from './componets/Navbar';
const Home = lazy(() => import('./componets/Home'));
const Product = lazy(() => import('./componets/Product'));
const Basket = lazy(() => import('./componets/Basket'));
const ProductFull = lazy(() => import('./componets/ProductFull'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productFull/:id" element={<ProductFull />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
