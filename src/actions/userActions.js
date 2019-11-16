export const uploadingFavorite = recipes => {
    return {
        type: 'UPLOADING_FAVORITE',
        payload: recipes
    }
}

// My account page
export const loadingUserInfo = (currentUserId) => {
    const heroku = process.env.REACT_APP_HEROKU
    const railsURL = process.env.RAILS_API_URL
    return (dispatch) => {
        return fetch(`${heroku}/api/v1/users/${currentUserId}` ,{
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(userData => {//console.log("userData", userData)
        dispatch(uploadingFavorite(userData.recipes))
        })

    }
}
