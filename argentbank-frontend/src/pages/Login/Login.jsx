import React from 'react';
import Form from '../../components/Form/Form'; // Importation du composant Form pour le formulaire de connexion
import './Login.scss'; // Importation du fichier de style SCSS pour le composant Login

/**
 * Composant fonctionnel pour afficher la page de connexion (Login).
 */
function Login() {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
                {/* Affiche le composant Form pour le formulaire de connexion */}
                <Form />
            </main>
        </div>
    );
}

export default Login; // Exportation du composant Login pour l'utiliser dans d'autres parties de l'application
