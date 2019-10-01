export default (state = {
    username: "",
    password: ""
}, action) => {
    console.log(action.formData)
    switch(action.type) {
        case 'UPDATE_LOGIN_FORM':
            return action.formData
        default:
            return state
    }
 }