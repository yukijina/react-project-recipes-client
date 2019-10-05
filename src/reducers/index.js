import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer.js';
import recipeReducer from './recipeReducer.js';
import currentUsersReducer from './currentUsersReducer.js';
import loginForm from './loginForm.js'
import signupForm from './signupForm.js'

const rootReducer = combineReducers({
    recipesReducer,
    currentUsersReducer,
    loginForm,
    signupForm,
    recipeReducer
})

export default rootReducer