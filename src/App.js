import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </Router>
    </div>;
};

export default App;
