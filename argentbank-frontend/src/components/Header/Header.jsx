import React from 'react';
import Logo from '../../img/argentBankLogo.webp'; // Importation du logo de la banque
import './Header.scss'; // Importation du fichier de style SCSS pour le Header
import { useSelector, useDispatch } from 'react-redux'; // Importation des hooks Redux pour accéder au store et dispatcher des actions
import { Link, useNavigate } from 'react-router-dom'; // Importation des composants de navigation de React Router
import { logout } from '../../redux/actions/auth.actions'; // Importation de l'action logout pour déconnecter l'utilisateur
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importation des icônes Font Awesome

// Composant Header pour afficher l'en-tête de l'application
const Header = () => {
  // Sélectionne le token pour vérifier si l'utilisateur est connecté
  const isConnected = useSelector((state) => state.auth.token);
  // Sélectionne le prénom de l'utilisateur depuis le store Redux
  const firstname = useSelector((state) => state.user.userData.firstname);

  const dispatch = useDispatch(); // Permet de dispatcher des actions Redux
  const navigate = useNavigate(); // Permet de rediriger l'utilisateur vers une autre page

  // Fonction pour gérer la déconnexion de l'utilisateur
  const logoutHandler = () => {
    dispatch(logout()); // Dispatch l'action de déconnexion
    sessionStorage.clear(); // Vide le sessionStorage
    localStorage.clear(); // Vide le localStorage
    navigate('/'); // Redirige vers la page d'accueil après la déconnexion
  };

  return (
    <header>
      <nav>
        {/* Lien vers la page d'accueil avec le logo */}
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>

        {/* Affichage différent selon que l'utilisateur est connecté ou non */}
        {isConnected ? (
          <div className="connected">
            {/* Lien vers le profil de l'utilisateur */}
            <Link to="/profile">
              <i className="fa-solid fa-2x fa-circle-user" />
              <p>{firstname}</p>
            </Link>
            {/* Lien pour se déconnecter */}
            <Link to="/" onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              <p>Sign out</p>
            </Link>
          </div>
        ) : (
          <div className="not-connected">
            {/* Lien vers la page de connexion si l'utilisateur n'est pas connecté */}
            <Link to="/login">
              <i className="fa-solid fa-circle-user" />
              <p>Sign In</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; // Exportation du composant Header pour l'utiliser dans d'autres parties de l'application
