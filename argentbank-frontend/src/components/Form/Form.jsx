import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../../redux/actions/auth.actions';
import './Form.scss';


const Form = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  
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
    e.preventDefault(); 

    const { email, password, rememberMe } = formData;

    try {
      
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        
        const { body: { token } } = await response.json();

        
        dispatch(loginSuccess(token));

        // Stocke le token dans sessionStorage pour une session temporaire
        sessionStorage.setItem("token", token);

        
        if (rememberMe) localStorage.setItem("token", token);

       
        navigate('/profile');
      } else {
        
        const error = "verify your email/password";
        setErrorMessage(error);
        dispatch(loginFailed(error));
      }
    } catch (error) {
      
      console.error("An error occurred:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="sign-in-content">
      
      <i className="fa-solid fa-circle-user"></i>
      <h2>Sign In</h2>

      
      <form onSubmit={handleSubmit}>
        
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

        
        <button className="sign-in-button" type="submit">Sign In</button>

        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Form;
