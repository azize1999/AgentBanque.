import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions"; // Importation des types d'actions

// Action pour récupérer les données du profil utilisateur
export const userProfile = (userData) => ({
    type: GET_USERPROFILE, // Type de l'action pour récupérer le profil utilisateur
    payload: userData,     // Les données du profil utilisateur à transmettre au reducer
});

// Action pour mettre à jour le nom d'utilisateur
export const updateUsername = (username) => ({
    type: EDIT_USERNAME, // Type de l'action pour modifier le nom d'utilisateur
    payload: username,   // Le nouveau nom d'utilisateur à transmettre au reducer
});
