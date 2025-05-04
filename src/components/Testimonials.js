import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Témoignages de nos clients</h2>
      <blockquote>
        <p>"Les plats faits maison de Fourchette Libre sont délicieux et authentiques. Je recommande vivement !"</p>
        <footer>- Marie D.</footer>
      </blockquote>
      <blockquote>
        <p>"Un service rapide et des recettes qui rappellent la cuisine de grand-mère. Bravo !"</p>
        <footer>- Jean P.</footer>
      </blockquote>
      <blockquote>
        <p>"J'adore la qualité des ingrédients et le goût unique de chaque plat. Merci Fourchette Libre !"</p>
        <footer>- Sophie L.</footer>
      </blockquote>
    </section>
  );
}

export default Testimonials;
