import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about/*" element={<About />}>
            <Route index element={<p> DEFAULT SON </p>} />
            <Route path="hi" element={<p> HI </p>} />
            <Route path="bye" element={<p> BYE </p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
