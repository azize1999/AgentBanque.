import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../../redux/actions/auth.actions';
import './Form.scss';

// Composant de formulaire de connexion
const Form = () => {
  // État pour gérer les champs du formulaire : email, mot de passe, et "se souvenir de moi"
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // État pour gérer les messages d'erreur
  const [errorMessage, setErrorMessage] = useState('');

  // Hook pour naviguer vers une autre page après la connexion réussie
  const navigate = useNavigate();

  // Hook pour dispatcher des actions Redux
  const dispatch = useDispatch();

  // Fonction pour gérer les changements des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Met à jour le state en fonction du type d'entrée (case à cocher)
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    const { email, password, rememberMe } = formData;

    try {
      // Envoie une requête POST pour se connecter
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Si la réponse est réussie, extrait le token de la réponse
        const { body: { token } } = await response.json();

        // Dispatch de l'action de succès de connexion avec le token
        dispatch(loginSuccess(token));

        // Stocke le token dans sessionStorage pour une session temporaire
        sessionStorage.setItem("token", token);

        // Si l'option "Se souvenir de moi" est cochée, stocke le token dans localStorage
        if (rememberMe) localStorage.setItem("token", token);

        // Redirige vers la page de profil après la connexion réussie
        navigate('/profile');
      } else {
        // En cas d'erreur, affiche un message d'erreur et dispatch l'action d'échec
        const error = "verify your email/password";
        setErrorMessage(error);
        dispatch(loginFailed(error));
      }
    } catch (error) {
      // Gestion des erreurs réseau ou serveur
      console.error("An error occurred:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="sign-in-content">
      {/* Icône utilisateur */}
      <i className="fa-solid fa-circle-user"></i>
      <h2>Sign In</h2>

      {/* Formulaire de connexion */}
      <form onSubmit={handleSubmit}>
        {/* Champ pour l'email / nom d'utilisateur */}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Champ pour le mot de passe */}
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* Case à cocher pour "Se souvenir de moi" */}
        <div className="input-remember">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleInputChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        {/* Bouton de soumission du formulaire */}
        <button className="sign-in-button" type="submit">Sign In</button>

        {/* Affiche un message d'erreur si nécessaire */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Form;
