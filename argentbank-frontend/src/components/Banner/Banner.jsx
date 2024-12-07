import React from 'react';
import './Banner.scss';

const Banner = () => (
  <div className="banner">
    <section className="introduction">
     <h2 className='sr-only'>Promoted Content</h2>
      <p className="subtitle">No fees.</p>
      <p className="subtitle">No minimum deposit.</p>
      <p className="subtitle">High interest rates.</p>
      <p className="text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
);

export default Banner;
