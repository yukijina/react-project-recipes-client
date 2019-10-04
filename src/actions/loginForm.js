export const updateLoginForm = (formData) => {
    console.log("log",formData)
    return {
        type: 'UPDATE_LOGIN_FORM',
        formData
    }
}