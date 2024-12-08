import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type.actions"; // Importation des types d'actions

// Action pour une connexion réussie
export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS, // Type de l'action pour une connexion réussie
    payload: token,      // Le token d'authentification
});

// Action pour un échec de connexion
export const loginFailed = (error) => ({
    type: LOGIN_FAIL, // Type de l'action pour un échec de connexion
    payload: error,   // Le message d'erreur
});

// Action pour la déconnexion de l'utilisateur
export const logout = () => ({
    type: LOGOUT, // Type de l'action pour une déconnexion
});