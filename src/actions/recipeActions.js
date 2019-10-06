import { resetRecipes } from './recipesActions.js'


export const sendingRecipeDetails = recipe => {
    const recipeData = {
        title: recipe.title, 
        recipeId: recipe.id,
        image: recipe.image.includes("http") ? recipe.image : `https://spoonacular.com/recipeImages/${recipe.image}`,
        readyInMinutes: recipe.readyInMinutes,
        servings: recipe.servings,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenfree: recipe.glutenFree,
        dairyfree: recipe.dairyFree,
        ketogenic: recipe.ketogenic,
        whole30: recipe.whole30,
        instructions: recipe.instructions,
        ingredients: recipe.extendedIngredients
    }
    return {
        type: 'UPLOADING_RECIPE',
        payload: recipeData
    }
}

export const incrementFavorite = () => {
    return {
        type: 'INCREMENT_FAVORITE',
    }
}

export const resetRecipe = () => {
    return {
        type: 'RESET_RECIPE',
    }
}


// Recipe Show (individual Recipe)
export const recipeShow = (recipeId, history) => {
    const API_KEY = process.env.REACT_APP_APIKEY;
    console.log("fire on show", recipeId)
    return (dispatch) => {
        return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipe => {
             dispatch(sendingRecipeDetails(recipe))
             history.push(`/recipes/${recipe.id}`)
             dispatch(resetRecipes())
         })
    }
}

//Click "like" button
export const clickLike = (recipe, userId) => {
    console.log("fire clickLike", recipe, userId)
    return (dispatch) => {
        const dataForRails = {
            title: recipe.title,
            image: recipe.image,
            api_id: recipe.recipeId,
            favorite: {like: true, review: "", user_id: userId.userId}
        }
        return fetch(`http://localhost:3001/api/v1/recipes` ,{
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataForRails)
        })
        .then(resp => resp.json())
        .then(recipe => {
             dispatch(incrementFavorite())
        
         })
    }
}
