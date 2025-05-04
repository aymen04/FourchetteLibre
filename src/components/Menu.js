import './Menu.css';
import MenuCard from './MenuCard';

function Menu({ onAddToCart }) {
  return (
    <div className="menu">
      <h2>Nos Plats du Mois</h2>
      <div className="menu-grid">
        <MenuCard 
          title="Pâtes Carbonara"
          description="Pâtes fraîches avec une sauce crémeuse"
          price="12.90 $"
          onAddToCart={onAddToCart}
        />
        <MenuCard 
          title="Poulet Grill"
          description="Poulet mariné à nos spices secrètes"
          price="14.50 $"
          onAddToCart={onAddToCart}
        />
        <MenuCard 
          title="Salade Niçoise"
          description="Salade fraîche avec thon, œufs et légumes"
          price="11.00 $"
          onAddToCart={onAddToCart}
        />
        <MenuCard 
          title="Quiche Lorraine"
          description="Quiche traditionnelle avec lardons et fromage"
          price="10.50 $"
          onAddToCart={onAddToCart}
        />
        <MenuCard 
          title="Soupe à l'oignon"
          description="Soupe chaude aux oignons caramélisés et fromage gratiné"
          price="8.00 $"
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}

export default Menu;
