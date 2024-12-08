import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importation des hooks Redux pour accéder au store et dispatcher des actions
import { userProfile } from '../../redux/actions/user.actions.jsx'; // Action pour mettre à jour le profil utilisateur dans le store
import UserAccount from '../../components/UserAccount/UserAccount.jsx'; // Importation du composant UserAccount pour afficher les comptes
import AccountData from '../../data/AccountData.json'; // Importation des données de compte depuis un fichier JSON
import EditUsername from '../../components/Username/Username.jsx'; // Importation du composant pour éditer le nom d'utilisateur

/**
 * Composant fonctionnel pour afficher la page de profil utilisateur.
 */
function Profile() {
  // Sélectionne le token d'authentification depuis le store Redux
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch(); // Hook pour dispatcher des actions Redux

  /**
   * useEffect pour récupérer les données de l'utilisateur quand le composant est monté.
   */
  useEffect(() => {
    if (!token) return; // Si le token n'existe pas, ne fait rien

    // Fonction asynchrone pour récupérer les données du profil utilisateur
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorisation': `Bearer ${token}`, // Envoie le token pour authentifier la requête
          },
        });

        if (!response.ok) {
          console.error("Erreur lors de la récupération du profil");
          return;
        }

        const { body } = await response.json();

        // Structure des données du profil utilisateur
        const userData = {
          createdAt: body.createdAt,
          updatedAt: body.updatedAt,
          id: body.id,
          email: body.email,
          firstname: body.firstName,
          lastname: body.lastName,
          username: body.userName,
        };

        // Dispatch l'action pour mettre à jour le profil utilisateur dans le store Redux
        dispatch(userProfile(userData));
      } catch (error) {
        console.error("Erreur réseau ou serveur :", error);
      }
    };

    fetchUserData(); // Appel de la fonction pour récupérer les données du profil
  }, [token, dispatch]); // Les dépendances pour useEffect

  return (
    <div className='profile-page'> 
      <main className='bg-dark'>
        {/* Composant pour éditer le nom d'utilisateur */}
        <EditUsername />
        
        {/* Boucle sur les données des comptes pour afficher chaque compte */}
        {AccountData.map((data) => (
          <UserAccount 
            key={data.id} // Clé unique pour chaque composant UserAccount
            title={data.title} // Titre du compte
            amount={data.amount} // Montant du compte
            description={data.description} // Description du compte
          />
        ))}
      </main>
    </div>
  );
}

export default Profile; // Exportation du composant Profile pour l'utiliser dans d'autres parties de l'application
