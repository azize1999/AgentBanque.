import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Importation des composants de React Router
import Footer from './components/Footer/Footer.jsx';        // Importation du composant Footer
import Header from './components/Header/Header.jsx';        // Importation du composant Header
import Home from './pages/Home/Home.jsx';                   // Importation de la page Home
import { useSelector } from 'react-redux';                  // Importation du hook useSelector pour accéder au store Redux
import './Main.scss';                                       // Importation des styles scss
import Login from './pages/Login/Login.jsx';                // Importation de la page Login
import Profile from './pages/Profile/Profile.jsx';          // Importation de la page Profile

/**
 * Composant principal de l'application.
 */
export default function App() {
    // Sélectionne l'état de connexion de l'utilisateur depuis le store Redux
    const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <div>
            {/* Affiche le composant Header */}
            <Header />
            
            {/* Configuration des routes de l'application */}
            <Routes>
                {/* Route pour la page d'accueil */}
                <Route path='/' element={<Home />} />

                {/* Route pour la page de connexion */}
                <Route path='login' element={<Login />} />

                {/* Route pour le profil, redirige vers /login si l'utilisateur n'est pas connecté */}
                <Route 
                    path='profile' 
                    element={isConnected ? <Profile /> : <Navigate to="/login" />} 
                />
            </Routes>

            {/* Affiche le composant Footer */}
            <Footer />
        </div>
    );
}
