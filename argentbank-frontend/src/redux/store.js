import { configureStore, combineReducers } from '@reduxjs/toolkit'; 
import { authReducer } from './reducers/auth.reducer.js';
import { userReducer } from './reducers/user.reducer.js'; 

// Combinaison des reducers en un seul reducer racine (rootReducer)
const rootReducer = combineReducers({
   auth: authReducer, 
   user: userReducer  
});

// Configuration du store Redux avec le reducer racine
const store = configureStore({
    reducer: rootReducer, 
});

export default store; 
