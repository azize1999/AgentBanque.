import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type.actions"; // Importation des types d'actions

/* État initial pour l'authentification */
const initialState = {
    status: "VOID",       // État initial de la requête
    isConnected: false,   // Statut de connexion de l'utilisateur
    token: null,          // Token d'authentification
    error: null,          // Message d'erreur
};

/* Reducer pour gérer les actions d'authentification */
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Connexion réussie
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
                error: null,
            };
        
        // Échec de connexion
        case LOGIN_FAIL:
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload,
            };

        // Déconnexion
        case LOGOUT:
            return initialState;

        // Retourne l'état par défaut
        default:
            return state;
    }
};
