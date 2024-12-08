import React from "react";
import './Item.scss';

/* Component function that returns the items from the home page */
function Item({ image, descriptionImage, title, description }) {
    return (
        <div className="feature-item">
            {/* Image de l'élément avec une description pour l'accessibilité */}
            <img src={image} alt={descriptionImage} className="feature-item-icon" />
            
            {/* Titre de l'élément */}
            <h3 className="feature-item-title">{title}</h3>
            
            {/* Description de l'élément */}
            <p>{description}</p>
        </div>
    );
}

export default Item;
