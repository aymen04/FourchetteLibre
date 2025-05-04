import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Cart from './components/Cart';
import User from './components/User';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  // For demo purposes, we will manage cartItems state here
  const [cartItems, setCartItems] = React.useState([]);

  const handleRemove = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    alert('Commande passée !');
    setCartItems([]);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingIndex = prevItems.findIndex(
        (cartItem) => cartItem.title === item.title
      );
      if (existingIndex !== -1) {
        // Update quantity if exists
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Header cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <>
              <Hero />
              <Menu onAddToCart={addToCart} />
              <AboutUs />
              <Testimonials />
            </>
          } />
          <Route path="/cart" element={
            <Cart cartItems={cartItems} onRemove={handleRemove} onPlaceOrder={handlePlaceOrder} />
          } />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
