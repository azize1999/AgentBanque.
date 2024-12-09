import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions"; 

// Action pour récupérer les données du profil utilisateur
export const userProfile = (userData) => ({
    type: GET_USERPROFILE, 
    payload: userData,     
});

// Action pour mettre à jour le nom d'utilisateur
export const updateUsername = (username) => ({
    type: EDIT_USERNAME, 
    payload: username,   
});
