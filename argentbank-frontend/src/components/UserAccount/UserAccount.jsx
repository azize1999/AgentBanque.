import React from 'react'
import './UserAccount.scss';

/* Component function that returns a user's account */
function UserAccount({ title, amount, description }) {
    return (
        <section className='account'>
            {/* Titre invisible pour les lecteurs d'écran afin d'améliorer l'accessibilité */}
            <h2 className='sr-only'>Accounts</h2>

            {/* Conteneur pour le titre, le montant et la description du compte */}
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </div>

            {/* Conteneur pour le bouton d'action */}
            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>
        </section>
    );
}

export default UserAccount