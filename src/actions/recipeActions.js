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

export const settingFavorite = (numberOfLikes) => {
    return {
        type: 'LOADING_NUMBER_OF_LIKES',
        payload: numberOfLikes
    }
}



// Recipe Show (loading individual Recipe)
export const recipeShow = (recipeId, history) => {
    const API_KEY = process.env.REACT_APP_APIKEY;
    console.log("fire on show", recipeId)
    return (dispatch) => {
        return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`)
        .then(resp => resp.json())
        .then(recipe => {
             dispatch(sendingRecipeDetails(recipe))
             dispatch(loadingFavorite(recipeId))
             dispatch(resetRecipes())
             history.push(`/recipes/${recipe.id}`)
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

//Loading total number of Likes if a recipe has favorites
export const loadingFavorite = (recipeId) => {
    console.log("fire loading Favorite", recipeId)
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/recipes` ,{
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(recipes => { console.log(recipes)
            recipes.map(recipe => {
                if (recipe.api_id === recipeId) {
                    const numberOfLikes = recipe.favorites.filter(fav => fav.like).length
                    dispatch(settingFavorite(numberOfLikes))
                } else {
                    
                }
            })
         })
    }
}