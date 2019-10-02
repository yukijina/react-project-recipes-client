export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER',
    }
}

//asynchronous
export const login = credentials => {
    console.log(credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
    }
}

//asynchronous
export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
    }
}

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser)
        return fetch("http://localhost:3001/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
         })
    }
}

