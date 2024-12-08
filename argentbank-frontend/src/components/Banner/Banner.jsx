import React from 'react';
import './Banner.scss';

// Composant fonctionnel Banner qui affiche une section promotionnelle
const Banner = () => (
  <div className="banner">
    {/* Section d'introduction contenant le contenu promotionnel */}
    <section className="introduction">
      {/* Titre invisible pour l'accessibilité */}
      <h2 className='sr-only'>Promoted Content</h2>

      {/* Sous-titres avec des points clés de l'offre promotionnelle */}
      <p className="subtitle">No fees.</p>
      <p className="subtitle">No minimum deposit.</p>
      <p className="subtitle">High interest rates.</p>

      {/* Texte promotionnel principal */}
      <p className="text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
);

export default Banner;


