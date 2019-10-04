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
export const searchRecipes = (query) => {
    const API_KEY = process.env.REACT_APP_APIKEY;
    return (dispatch) => {
        console.log("fire", query)
        dispatch(loadingRecipes())
        return fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipes => dispatch(sendingRecipes(recipes.results)))
    }

}