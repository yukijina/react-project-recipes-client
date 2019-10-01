import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer.js';
import currentUsersReducer from './currentUsersReducer.js';
import loginForm from './loginForm.js'

const rootReducer = combineReducers({
    recipesReducer,
    currentUsersReducer,
    loginForm
})

export default rootReducer