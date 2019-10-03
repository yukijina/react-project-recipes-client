import React from 'react'
import { connect } from 'react-redux';
import { updateSignupForm }from '../actions/signupForm.js';
import { signup } from '../actions/currentUsers.js';

const Signup = ({signupData, updateSignupForm, signup}) => {
    const handleChange = event => {
        updateSignupForm({...signupData, [event.target.name]: event.target.value})  
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupData)
    }
    return (    
        <form onSubmit={handleSubmit}>
            <input type="text" value={signupData.username} name="username" onChange={handleChange}></input>
            <input type="password" value={signupData.password} name="password" onChange={handleChange}></input>
            <input type="submit" value="Sign Up"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);