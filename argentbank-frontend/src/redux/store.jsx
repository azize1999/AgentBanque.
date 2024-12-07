import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer.jsx';
import { userReducer } from './reducers/user.reducer.jsx';

// combiner Reducer
const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
});

// Store-Konfiguration
const store = configureStore({
    reducer: rootReducer
});

export default store;
