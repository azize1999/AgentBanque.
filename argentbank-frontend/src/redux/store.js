import { configureStore, combineReducers } from '@reduxjs/toolkit'; // Importation des fonctions de Redux Toolkit:
import { authReducer } from './reducers/auth.reducer.js'; // Importation du reducer d'authentification
import { userReducer } from './reducers/user.reducer.js'; // Importation du reducer utilisateur

// Combinaison des reducers en un seul reducer racine (rootReducer)
const rootReducer = combineReducers({
   auth: authReducer, // Reducer pour l'authentification 
   user: userReducer  // Reducer pour les données utilisateur
});

// Configuration du store Redux avec le reducer racine
const store = configureStore({
    reducer: rootReducer, // Associe le reducer racine au store
});

export default store; // Exportation du store pour l'utiliser dans l'application
