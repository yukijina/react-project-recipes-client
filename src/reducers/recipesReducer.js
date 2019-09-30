export default (state = {
    recipes: null,
    loading: false
}, action) => {
    console.log(action.type)
    switch(action.type) {
        case 'LOADING_RECIPES': 
            return {...state, loading: true}

        case 'FETCH_RECIPES':
            return {loading: false, recipes: action.payload}

        default:
            return state
    }
}