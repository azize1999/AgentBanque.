/* Types d'actions pour l'authentification */

// Déclenchée lorsque la connexion réussit
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// Déclenchée lorsque la connexion échoue
export const LOGIN_FAIL = "LOGIN_FAIL";

// Déclenchée pour déconnecter l'utilisateur
export const LOGOUT = "LOGOUT";


/* Types d'actions pour le profil utilisateur */

// Déclenchée pour récupérer le profil de l'utilisateur
export const GET_USERPROFILE = "GET_USERPROFILE";

// Déclenchée pour modifier le nom d'utilisateur
export const EDIT_USERNAME = "EDIT_USERNAME";
