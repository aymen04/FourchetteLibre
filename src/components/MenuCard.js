// src/components/MenuCard.js
import './MenuCard.css';

function MenuCard({ title, description, price, onAddToCart }) {
  const handleAddClick = () => {
    if (onAddToCart) {
      onAddToCart({ title, description, price, quantity: 1 });
    }
  };

  return (
    <div className="menu-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button className="add-button" onClick={handleAddClick}>Ajouter</button>
    </div>
  );
}

export default MenuCard;
