import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importation des hooks Redux pour accéder au store et dispatcher des actions
import { updateUsername } from '../../redux/actions/user.actions.jsx'; // Action Redux pour mettre à jour le nom d'utilisateur
import "./Username.scss"; // Importation du fichier de style SCSS pour le composant ChangeUsername

/**
 * Composant fonctionnel pour modifier le nom d'utilisateur.
 */
function ChangeUsername() {
  // Sélectionne le token d'authentification depuis le store Redux
  const token = useSelector((state) => state.auth.token);
  // Sélectionne les données de l'utilisateur depuis le store Redux
  const userData = useSelector((state) => state.user.userData);

  // États locaux pour gérer l'affichage du formulaire, le nom d'utilisateur, le message d'erreur et le message de succès
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState(userData.username || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch(); // Hook pour dispatcher des actions Redux

  /**
   * Fonction pour gérer la soumission du formulaire de mise à jour du nom d'utilisateur.
   */
  const handleSubmitUsername = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    try {
      // Envoie une requête PUT pour mettre à jour le nom d'utilisateur
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorisation: `Bearer ${token}`, // Envoie le token pour authentifier la requête
        },
        body: JSON.stringify({ userName }), // Envoie le nouveau nom d'utilisateur en format JSON
      });

      if (!response.ok) {
        // En cas d'erreur de la requête, affiche un message d'erreur
        setErrorMessage("Error updating username");
        return;
      }

      // Récupère les données de la réponse JSON
      const data = await response.json();
      const newUsername = data.body.userName;

      // Dispatch l'action pour mettre à jour le nom d'utilisateur dans le store Redux
      dispatch(updateUsername(newUsername));
      setShowForm(false); // Ferme le formulaire après la mise à jour
      setSuccessMessage("Username updated successfully!"); // Affiche un message de succès
    } catch (error) {
      // Gestion des erreurs réseau ou serveur
      console.error("Network or server error:", error);
      setErrorMessage("An unexpected error occurred");
    }
  };

  return (
    <div className="header">
      {/* Affiche le formulaire si showForm est vrai */}
      {showForm ? (
        <div>
          <h2>Edit user info</h2>
          <form onSubmit={handleSubmitUsername}>
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)} // Met à jour le state avec la nouvelle valeur du champ
              />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input type="text" id="firstname" value={userData.firstname} disabled />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" value={userData.lastname} disabled />
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button type="button" className="edit-username-button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      ) : (
        <div>
          {/* Affiche le message de bienvenue et le bouton d'édition si showForm est faux */}
          <h2>
            Welcome back <br />
            {userData.firstname} {userData.lastname}!
          </h2>
          <button className="edit-button" onClick={() => setShowForm(true)}>
            Edit Name
          </button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default ChangeUsername; // Exportation du composant pour l'utiliser dans d'autres parties de l'application
