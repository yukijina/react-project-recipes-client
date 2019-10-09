import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { loadingUser } from '../actions/userActions.js';

class User extends Component {
    render() {
        const user = this.props.currentUser
        return (
            <div>
                <h2>My Account</h2>
{/*             
                {user ? <div><h2>Hello, {user.username}</h2><h3>Your Favorite Recipe:</h3><p>{user.recipes.map(r => r.title)}</p></div> : null} */}
                 {user ? <div><h2>Hello, {user.username}</h2><h3>Your Favorite Recipe:</h3></div> : null}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUsersReducer
    }
}

export default connect(mapStateToProps)(User);