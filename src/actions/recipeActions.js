export const loadingRecipes = () => {
    return {
        type: 'LOADING_RECIPES'
    }
}

export const sendingRecipes = recipes => {
    const recipeData = recipes.map(recipe => {
        return {
            title: recipe.title, 
            recipeId: recipe.id,
            image: recipe.image.includes("http") ? recipe.image : `https://spoonacular.com/recipeImages/${recipe.image}`,
            instructions: recipe.instructions,
            ingredients: recipe.extendedIngredients
        }
    })
    return {
        type: 'FETCH_RECIPES',
        payload: recipeData
    }
}



export const fetchRecipes = () => {
    const API_KEY = process.env.REACT_APP_APIKEY;
    return (dispatch) => {
        dispatch(loadingRecipes())
        return fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipeColletctions => dispatch(sendingRecipes(recipeColletctions.recipes)))
    }
} 

// search query
export const searchRecipes = (state) => {
    const API_KEY = process.env.REACT_APP_APIKEY;
    return (dispatch) => {
        dispatch(loadingRecipes())
        return fetch(`https://api.spoonacular.com/recipes/search?query=${state.query}&diet=${state.diet}&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipes => dispatch(sendingRecipes(recipes.results)))
    }
}

// Recipe Show (individual Recipe)
export const recipeShow = (id) => {
    const API_KEY = process.env.REACT_APP_APIKEY;
    console.log("fire", id)
    // return (dispatch) => {
    //     dispatch(loadingRecipes())
    //     return fetch(`https://api.spoonacular.com/recipes/${id}/information&apiKey=${API_KEY}`)
    //     .then(resp => resp.json())
    //     .then(recipes => console.log(recipes))
    // }
}