import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>

      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App
