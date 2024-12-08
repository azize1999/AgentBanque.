import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions"; // Importation des types d'actions

/* État initial pour l'utilisateur */
const initialState = {
    status: 'VOID',       // Statut initial de la requête utilisateur
    userData: {           // Données initiales de l'utilisateur
        username: '',
        firstname: '',
        lastname: '',
    },
};

/* Reducer pour gérer les actions liées au profil utilisateur */
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Récupération du profil utilisateur réussie
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',   // Mise à jour du statut à "SUCCEEDED"
                userData: action.payload, // Mise à jour des données utilisateur avec le payload
            };

        // Modification du nom d'utilisateur
        case EDIT_USERNAME:
            return {
                ...state,
                status: 'MODIFIED',     // Mise à jour du statut à "MODIFIED"
                userData: {
                    ...state.userData,  // Garde les autres informations utilisateur inchangées
                    username: action.payload, // Met à jour uniquement le nom d'utilisateur
                },
            };

        // Déconnexion de l'utilisateur
        case LOGOUT:
            return initialState;        // Réinitialise l'état à l'état initial

        // Retourne l'état actuel par défaut
        default:
            return state;
    }
};
