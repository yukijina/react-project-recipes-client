export default (state = {
    recipe: null,
}, action) => {
    console.log("RecipeReducer:", action.type, action.payload)
    switch(action.type) {
        case 'INDIVIDUAL_RECIPE':
            return {recipe: action.payload}
        default:
            return state
    }
}