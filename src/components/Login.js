import React from 'react'
import { connect } from 'react-redux';
import { updateLoginForm }from '../actions/loginForm.js';
import { login } from '../actions/currentUsers.js';

const Login = ({loginData, updateLoginForm, login, history}) => {
    const handleChange = event => {
        updateLoginForm({...loginData, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginData, history)
    }
    return (    
        <form onSubmit={handleSubmit}>
            <input type="text" value={loginData.username} name="username" onChange={handleChange}></input>
            <input type="password" value={loginData.password} name="password" onChange={handleChange}></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);



// class Login extends Component {

//     handleChange = event => {
//         this.props.updateLoginForm({...this.props.loginData, [event.target.name]: event.target.value})
//     }
    
//     handleSubmit = event => {
//         event.preventDefault()
//         this.props.login(this.props.loginData, this.props.history)
//     }
    
//     render(){
        
//     return (    
//         <form onSubmit={this.handleSubmit}>
//             <input type="text" value={this.props.loginData.username} name="username" onChange={this.handleChange}></input>
//             <input type="password" value={this.props.loginData.password} name="password" onChange={this.handleChange}></input>
//             <input type="submit" value="Log In"></input>
//         </form>
//     )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         loginData: state.loginForm
//     }
// }

// export default connect(mapStateToProps, { updateLoginForm, login })(Login);