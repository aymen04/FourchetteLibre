import React from 'react';
import './Cart.css';

function Cart({ cartItems, onRemove, onPlaceOrder }) {
  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(' €', '').replace(',', '.'));
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} x {item.quantity} - {item.price}
                <button onClick={() => onRemove(index)}>Supprimer</button>
              </li>
            ))}
          </ul>
          <p>Total: {totalPrice.toFixed(2).replace('.', ',')} $</p>
          <button onClick={onPlaceOrder}>Passer la commande</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
