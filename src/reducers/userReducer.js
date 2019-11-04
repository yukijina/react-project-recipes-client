export default (state = {
    recipes: []
}, action) => {
    switch(action.type) {
        case 'UPLOADING_FAVORITE':
            return {...state, recipes: action.payload}

        default:
            return state
    }
}