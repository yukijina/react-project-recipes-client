export default (state = {
    recipe: null,
    favorite: 0
}, action) => {
    console.log("RecipeReducer:", action.type, action.payload)
    switch(action.type) {
        case 'UPLOADING_RECIPE':
            return {...state, recipe: action.payload}

        case 'INCREMENT_FAVORITE':
            return {...state, favorite: +1 }
        
        case 'RESET_RECIPE':
            return {recipe: null, favorite: 0}
            
        default:
            return state
    }
}